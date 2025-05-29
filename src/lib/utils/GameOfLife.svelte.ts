import { updateGameStats } from '$lib/store/index.svelte';
import { SvelteSet } from 'svelte/reactivity';

export class GameOfLife {
	public grid = $state(new SvelteSet<string>());
	public ws = $state<WebSocket | null>(null);
	public isConnected = $state(false);
	public centerX = $state(0);
	public centerY = $state(0);
	public renderRegionSize = $state(10);
	public url = $state('');
	public isPaused = $state(false);

	private localSimulationInterval: number | null = null;
	private simulationSpeed = 100;

	public setView(centerX: number, centerY: number, renderRegionSize: number) {
		this.centerX = centerX;
		this.centerY = centerY;
		this.renderRegionSize = renderRegionSize;

		console.log('setView', centerX, centerY, renderRegionSize);

		this.send({
			command: 'setView',
			args: [centerX, centerY, renderRegionSize],
		});

		setTimeout(() => {
			this.requestGridSync();
			this.requestStatsSync();
		}, 500);
	}

	public setCell(x: number, y: number) {
		this.setCells([[x, y]]);
	}

	public setBrushCells(x: number, y: number, size: number) {
		const cells: [number, number][] = [];

		for (let i = Math.floor(-size / 2); i < Math.floor(size / 2); i++) {
			for (let j = Math.floor(-size / 2); j < Math.floor(size / 2); j++) {
				const failChance = Math.random() > 0.3;
				if (failChance) continue;

				cells.push([x + i, y + j]);
			}
		}

		this.setCells(cells);
	}

	public setCells(cells: [number, number][]) {
		for (const [x, y] of cells) {
			this.grid.add(GameOfLife.pointToKey(x, y));
		}

		if (this.ws && this.ws.readyState === WebSocket.OPEN) {
			this.send({
				command: 'setCells',
				args: cells,
			});
		}
	}

	public pause() {
		this.isPaused = true;
		this.stopLocalSimulation();

		if (this.ws && this.ws.readyState === WebSocket.OPEN) {
			this.ws.close();
		}
	}

	public resume() {
		this.isPaused = false;

		if (!this.ws || this.ws.readyState === WebSocket.CLOSED) {
			this.init();
		}
	}

	public init() {
		if (this.isPaused) return;

		this.startLocalSimulation();

		console.log('connecting...');
		this.ws = new WebSocket(this.url);

		this.ws.onopen = () => {
			console.log('connected');
			this.isConnected = true;

			this.stopLocalSimulation();

			this.grid.clear();

			this.setView(this.centerX, this.centerY, this.renderRegionSize);
		};

		this.ws.onmessage = (event) => {
			const data = JSON.parse(event.data);

			if (data.command === 'gridSync') {
				this.grid.clear();
				this.updateGrid(data.args[0], []);
			}

			if (data.command === 'gridUpdate') {
				this.updateGrid(data.args[0], data.args[1]);
			}

			if (data.command === 'statsSync') {
				updateGameStats(data.args[0]);
			}
		};

		this.ws.onclose = () => {
			this.ws?.close();
			this.ws = null;
			this.isConnected = false;

			if (!this.isPaused) {
				this.startLocalSimulation();

				// try reconnecting
				setTimeout(() => {
					this.init();
				}, 3000);
			}
		};

		this.ws.onerror = () => {
			this.isConnected = false;
			if (!this.isPaused) {
				this.startLocalSimulation();
			}
		};
	}

	private startLocalSimulation() {
		if (this.localSimulationInterval || this.isPaused) return;

		console.log('Starting local simulation');

		if (this.grid.size === 0) {
			this.populateRandomGrid();
		}

		this.localSimulationInterval = setInterval(() => {
			if (!this.isPaused) {
				this.stepLocalSimulation();
			}
		}, this.simulationSpeed);
	}

	private stopLocalSimulation() {
		if (this.localSimulationInterval) {
			console.log('Stopping local simulation');
			clearInterval(this.localSimulationInterval);
			this.localSimulationInterval = null;
		}
	}

	private stepLocalSimulation() {
		const currentCells = new Set(this.grid);
		const neighborCounts = new Map<string, number>();

		for (const cellKey of currentCells) {
			const [x, y] = GameOfLife.keyToPoint(cellKey);

			for (let dx = -1; dx <= 1; dx++) {
				for (let dy = -1; dy <= 1; dy++) {
					const neighborKey = GameOfLife.pointToKey(x + dx, y + dy);
					if (dx === 0 && dy === 0) continue;

					neighborCounts.set(
						neighborKey,
						(neighborCounts.get(neighborKey) || 0) + 1,
					);
				}
			}
		}

		const newGrid = new SvelteSet<string>();
		let birthCount = 0;
		let deathCount = 0;

		for (const cellKey of currentCells) {
			const neighbors = neighborCounts.get(cellKey) || 0;
			if (neighbors === 2 || neighbors === 3) {
				newGrid.add(cellKey);
			} else {
				deathCount++;
			}
		}

		for (const [cellKey, neighbors] of neighborCounts) {
			if (!currentCells.has(cellKey) && neighbors === 3) {
				newGrid.add(cellKey);
				birthCount++;
			}
		}

		this.grid = newGrid;
	}

	private send(data: object) {
		if (!this.ws || this.ws.readyState !== WebSocket.OPEN) return;

		this.ws?.send(JSON.stringify(data));
	}

	private requestGridSync() {
		this.send({ command: 'gridSync' });
	}

	public requestStatsSync() {
		this.send({ command: 'statsSync' });
	}

	private updateGrid(added: [number, number][], removed: [number, number][]) {
		if (added) {
			for (const [x, y] of added) {
				this.grid.add(GameOfLife.pointToKey(x, y));
			}
		}

		if (removed) {
			for (const [x, y] of removed) {
				this.grid.delete(GameOfLife.pointToKey(x, y));
			}
		}
	}

	private populateRandomGrid() {
		const density = 0.2;
		const gridSize = Math.min(this.renderRegionSize, 50);

		for (
			let x = this.centerX - gridSize / 2;
			x < this.centerX + gridSize / 2;
			x++
		) {
			for (
				let y = this.centerY - gridSize / 2;
				y < this.centerY + gridSize / 2;
				y++
			) {
				if (Math.random() < density) {
					this.grid.add(
						GameOfLife.pointToKey(Math.floor(x), Math.floor(y)),
					);
				}
			}
		}

		console.log(`Populated grid with ${this.grid.size} random cells`);
	}

	public static pointToKey(x: number, y: number): string {
		return `${x},${y}`;
	}

	public static keyToPoint(key: string): [number, number] {
		const [x, y] = key.split(',').map(Number);
		return [x, y];
	}
}
