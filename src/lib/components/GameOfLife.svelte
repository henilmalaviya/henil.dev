<script lang="ts">
	import { browser } from '$app/environment';
	import { PUBLIC_GAME_SERVER_URL } from '$env/static/public';
	import { focusMode } from '$lib/store/index.svelte';
	import { cn, getRandomNumber } from '$lib/utils';
	import { GameOfLife } from '$lib/utils/GameOfLife.svelte';
	import { onMount } from 'svelte';

	let canvas = $state<HTMLCanvasElement | null>(null);
	let ctx = $state<CanvasRenderingContext2D | null>(null);

	let cellSize = $state(30);
	let brushSize = $state(2);
	let cellColor = $state('#0891b2');
	// let randomJumpIntervalMs = $state(5000);
	let isPageVisible = $state(true);

	let gol = new GameOfLife();
	gol.url = PUBLIC_GAME_SERVER_URL;

	let innerWidth = $state(browser ? window.innerWidth : 0);
	let innerHeight = $state(browser ? window.innerHeight : 0);

	let renderRegionSize = $derived.by(() => {
		return Math.ceil(Math.max(innerWidth, innerHeight) / cellSize);
	});

	function gridToCanvas(gridX: number, gridY: number) {
		const canvasX =
			(gridX - gol.centerX) * cellSize + (canvas?.width || 0) / 2;
		const canvasY =
			(gridY - gol.centerY) * cellSize + (canvas?.height || 0) / 2;
		return { x: canvasX, y: canvasY };
	}

	function canvasToGrid(canvasX: number, canvasY: number) {
		const gridX = Math.floor(
			(canvasX - innerWidth / 2) / cellSize + gol.centerX,
		);
		const gridY = Math.floor(
			(canvasY - innerHeight / 2) / cellSize + gol.centerY,
		);
		return { x: gridX, y: gridY };
	}

	function render() {
		if (!ctx || !canvas || !isPageVisible) return;

		ctx.clearRect(0, 0, canvas.width, canvas.height);

		ctx.fillStyle = cellColor;
		for (const cellKey of gol.grid) {
			const [gridX, gridY] = GameOfLife.keyToPoint(cellKey);
			const { x: canvasX, y: canvasY } = gridToCanvas(gridX, gridY);

			// is visible
			if (
				canvasX + cellSize >= 0 &&
				canvasX <= innerWidth &&
				canvasY + cellSize >= 0 &&
				canvasY <= innerHeight
			) {
				ctx.fillRect(canvasX, canvasY, cellSize, cellSize);
			}
		}
	}

	// canvas internal updates
	$effect(() => {
		if (!canvas) return;

		canvas.width = innerWidth;
		canvas.height = innerHeight;
	});

	// page visibility updates
	$effect(() => {
		if (!browser) return;

		function handleVisibilityChange() {
			isPageVisible = !document.hidden;

			if (!isPageVisible) {
				gol.pause();
			} else {
				gol.resume();
			}
		}

		document.addEventListener('visibilitychange', handleVisibilityChange);

		isPageVisible = !document.hidden;

		return () => {
			document.removeEventListener(
				'visibilitychange',
				handleVisibilityChange,
			);
		};
	});

	// window updates
	$effect(() => {
		if (!browser || !isPageVisible) return;

		function handleResize() {
			innerWidth = window.innerWidth;
			innerHeight = window.innerHeight;
		}

		function handleWindowMouseMove(event: MouseEvent) {
			const { x, y } = canvasToGrid(event.clientX, event.clientY);
			gol.setBrushCells(x, y, brushSize);
		}

		function handleWindowTouchMove(event: TouchEvent) {
			const { x, y } = canvasToGrid(
				event.touches[0].clientX,
				event.touches[0].clientY,
			);
			gol.setBrushCells(x, y, brushSize);
		}

		function handleWindowMouseWheel(event: WheelEvent) {
			if (event.deltaY < 0) {
				brushSize = Math.min(5, brushSize + 1);
			} else {
				brushSize = Math.max(2, brushSize - 1);
			}
		}

		window.addEventListener('resize', handleResize);
		window.addEventListener('orientationchange', handleResize);
		window.addEventListener('mousemove', handleWindowMouseMove);
		window.addEventListener('touchmove', handleWindowTouchMove);
		window.addEventListener('wheel', handleWindowMouseWheel);

		return () => {
			window.removeEventListener('resize', handleResize);
			window.removeEventListener('orientationchange', handleResize);
			window.removeEventListener('mousemove', handleWindowMouseMove);
			window.removeEventListener('touchmove', handleWindowTouchMove);
			window.removeEventListener('wheel', handleWindowMouseWheel);
		};
	});

	// mounts
	$effect(() => {
		if (canvas && browser) {
			ctx = canvas.getContext('2d');

			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
		}
	});

	$effect(() => {
		if (!isPageVisible) return;

		const gridSize = gol.grid.size;

		requestAnimationFrame(render);
	});

	// gol updates
	$effect(() => {
		if (!isPageVisible) return;

		gol.setView(gol.centerX, gol.centerY, renderRegionSize);
	});

	onMount(() => {
		if (isPageVisible) {
			gol.init();
		}

		// let jumpInterval = setInterval(() => {
		// 	const [centerX, centerY] = [
		// 		getRandomNumber(-25, 25),
		// 		getRandomNumber(-25, 25),
		// 	];

		// 	gol.centerX = centerX;
		// 	gol.centerY = centerY;
		// }, randomJumpIntervalMs);

		let randomCellActivationInterval = setInterval(() => {
			// Only activate cells if page is visible
			if (!isPageVisible) return;

			let points: [number, number][] = [];

			for (let i = 0; i < 10; i++) {
				const x = getRandomNumber(gol.centerX - 25, gol.centerX + 25);
				const y = getRandomNumber(gol.centerY - 25, gol.centerY + 25);
				points.push([x, y]);
			}

			for (const [x, y] of points) {
				gol.setBrushCells(x, y, 4);
			}
		}, 5000);

		return () => {
			// clearInterval(jumpInterval);
			clearInterval(randomCellActivationInterval);

			if (gol.ws && gol.ws.readyState === WebSocket.OPEN) {
				gol.ws.close();
			}
		};
	});
</script>

<div
	class="fixed top-0 left-0 flex h-full max-h-screen w-full max-w-screen opacity-15"
>
	{#if focusMode.value === false && isPageVisible}
		<canvas bind:this={canvas} class="h-full w-full"></canvas>
	{/if}
</div>

<div
	class="fixed right-0 bottom-0 flex w-fit items-center justify-center gap-1 p-2 text-xs"
>
	<div class="inline-grid *:[grid-area:1/1]">
		<div
			class={cn(
				'status animate-ping',
				gol.isConnected && isPageVisible
					? 'status-success'
					: 'status-error',
			)}
		></div>
		<div
			class={cn(
				'status',
				gol.isConnected && isPageVisible
					? 'status-success'
					: 'status-error',
			)}
		></div>
	</div>
	{#if !isPageVisible}
		Simulation paused
	{:else if gol.isConnected}
		Simulation online
	{:else}
		Simulation offline
	{/if}
</div>
