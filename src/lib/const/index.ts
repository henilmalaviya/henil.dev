export const EMAIL = 'me@henil.dev';
export const BIRTH_YEAR = 2006;

export const AGE = new Date().getFullYear() - BIRTH_YEAR;

export const GITHUB_URL = 'https://github.com/henilmalaviya';
export const X_URL = 'https://x.com/henilmalaviya';

export const EXPERIENCE = [
	{
		company: 'ssessa',
		role: 'Developer Intern',
		period: 'Oct 2025 - Present',
		description:
			'Developing full-stack project using Next.js and Typescript.',
		href: 'https://ssessa.com',
	},
	{
		company: 'ssessa',
		role: 'React Intern',
		period: 'May 2024 - Oct 2024',
		description: 'Developed and maintained React-based project.',
		href: 'https://ssessa.com',
	},
];

export const PROJECTS = [
	{
		name: 'Link API',
		description:
			'A simple anonymous URL shortening API built with speed in mind.',
		href: 'https://api.link.henil.dev/swagger',
		github: 'https://github.com/henilmalaviya/link-api',
	},
	{
		name: 'GOL',
		description:
			"A small, concurrent-safe core library for Conway's Game of Life in Go.",
		github: 'https://github.com/henilmalaviya/gol',
	},
	{
		name: "Conway's Balcony",
		description:
			'A public web interface to watch and interact with Conway’s Game of Life simulation in real time.',
		href: 'https://balcony.henil.dev',
		github: 'https://github.com/henilmalaviya/conway-balcony',
	},
];
