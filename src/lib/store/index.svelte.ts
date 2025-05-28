import { browser } from '$app/environment';

type GameOfLifeStats = {
	totalCellBirthCount: number;
	totalCellDeathCount: number;
	generation: number;
	activePlayers: number;
};

const STORAGE_KEY = 'gameOfLifeStats';

function loadStatsFromStorage(): GameOfLifeStats {
	if (!browser) {
		return {
			totalCellBirthCount: 0,
			totalCellDeathCount: 0,
			generation: 0,
			activePlayers: 0,
		};
	}

	try {
		const stored = localStorage.getItem(STORAGE_KEY);
		if (stored) {
			return JSON.parse(stored);
		}
	} catch (error) {
		console.warn('Failed to load game stats from localStorage:', error);
	}

	return {
		totalCellBirthCount: 0,
		totalCellDeathCount: 0,
		generation: 0,
		activePlayers: 0,
	};
}

function saveStatsToStorage(stats: GameOfLifeStats) {
	if (!browser) return;

	try {
		localStorage.setItem(STORAGE_KEY, JSON.stringify(stats));
	} catch (error) {
		console.warn('Failed to save game stats to localStorage:', error);
	}
}

export const gameStats = $state<GameOfLifeStats>(loadStatsFromStorage());

export const focusMode = $state({
	value: false,
});

export function updateGameStats(newStats: Partial<GameOfLifeStats>) {
	Object.assign(gameStats, newStats);
	saveStatsToStorage(gameStats);
}

export function toggleFocusMode() {
	focusMode.value = !focusMode.value;
}
