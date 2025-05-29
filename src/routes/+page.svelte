<script>
	import GameOfLifeStatsCard from '$lib/components/GameOfLifeStatsCard.svelte';
	import { EMAIL, GITHUB_URL, X_URL } from '$lib/const';
	import Icon from '@iconify/svelte';
	import AboutCard from './AboutCard.svelte';
</script>

<svelte:head>
	<title>Henil</title>
</svelte:head>

<div
	class="font-geist z-[10] mx-auto flex max-w-3xl flex-col gap-8 px-8 py-16 font-mono md:py-32"
>
	<div class="flex flex-col gap-4 md:flex-row md:justify-between">
		<div
			class="card glass w-full flex-grow shadow-md transition hover:shadow-lg"
		>
			<div class="card-body gap-0">
				<div class="flex justify-between">
					<h2 class="text-base md:text-lg">Yo! I am</h2>
					<div class="flex items-center justify-center gap-2">
						<a class="" target="_blank" href={GITHUB_URL}>
							<Icon icon="lucide:github" class="h-5 w-5" />
						</a>
						<a class="" target="_blank" href={X_URL}>
							<Icon icon="lucide:twitter" class="h-5 w-5" />
						</a>
						<a class="" target="_blank" href="mailto:{EMAIL}">
							<Icon icon="lucide:mail" class="h-5 w-5" />
						</a>
					</div>
				</div>
				<h1 class="text-3xl font-bold md:text-4xl">Henil</h1>
				<h3 class="text-lg md:text-xl">
					I write lots of <span class="font-mono tracking-tighter"
						>functions</span
					>
				</h3>
				<div class="my-2"></div>

				<a
					class="btn btn-primary w-fit"
					target="_blank"
					href="mailto:{EMAIL}">Say hello!</a
				>
			</div>
		</div>
		<div class="hidden max-w-fit md:contents md:w-96">
			<GameOfLifeStatsCard />
		</div>
	</div>

	<AboutCard />

	<div class="contents max-w-full md:hidden">
		<GameOfLifeStatsCard />
	</div>
</div>
