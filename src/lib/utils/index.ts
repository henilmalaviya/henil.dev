import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function getRandomNumber(min: number, max: number) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function humanizeNumber(num: number): string {
	return new Intl.NumberFormat('en', {
		notation: 'compact',
		compactDisplay: 'short',
		maximumFractionDigits: 1,
	}).format(num);
}
