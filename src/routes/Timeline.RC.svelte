<script lang="ts">
	import Icon from '@iconify/svelte';
	import moment from 'moment';

	interface TimelineItem {
		title: string;
		description: string;
		range: [Date, Date] | [Date, null];
		href: string;
		tags?: string[];
	}

	function getShortMonth(date: Date) {
		return date.toLocaleString('en-US', { month: 'short' });
	}

	const experiences: TimelineItem[] = [
		{
			title: 'Application Developer Intern at Ssessa',
			description: 'Developed and maintained React based product.',
			range: [new Date('13 May 2024'), new Date('03 Oct 2024 23:59:59')],
			href: 'https://ssessa.com',
			tags: [
				'Typescript',
				'React.js',
				'JavaScript',
				'React-Redux',
				'Documentation',
			],
		},
	];
</script>

<div>
	<div class="uppercase font-semibold my-2">Experience</div>
	<hr class="mb-3" />
	<div class="flex flex-col gap-4">
		<div class="flex flex-col gap-6 group/card-list">
			{#each experiences as event}
				{@const startDate = event.range[0]}
				{@const endDate = event.range[1]}
				{@const rangeFull = `${startDate.toLocaleDateString('en-US', { dateStyle: 'long' })} - ${endDate ? endDate.toLocaleDateString('en-US', { dateStyle: 'long' }) : 'Present'}`}
				<a
					target="_blank"
					href={event.href}
					class="relative group/card hover:!opacity-100 transition-all group-hover/card-list:opacity-60 hover:no-underline"
				>
					<div
						class="z-[-1] absolute inset-0 w-full h-full group-hover/card:bg-theme-50 group-hover/card:border group-hover/card:border-theme-500 transition rounded-md"
					></div>
					<div
						class="hidden group-hover/card:block absolute top-0 right-0 p-3"
					>
						<Icon icon="tabler:external-link" />
					</div>
					<div
						class="flex gap-6 px-4 py-4 justify-start max-md:flex-col max-md:gap-2"
					>
						<div
							class="flex flex-col min-w-fit text-muted-foreground text-sm"
						>
							<p
								title={rangeFull}
								class="leading-7 max-md:leading-normal group-hover/card:text-black transition-all"
							>
								{getShortMonth(startDate)}
								{startDate.getFullYear()} - {endDate === null ||
								endDate.getTime() > Date.now()
									? 'Present'
									: `${getShortMonth(endDate)} ${endDate.getFullYear()}`}
							</p>
							{#if endDate !== null && endDate.getTime() < Date.now()}
								<p
									class="text-xs transition-all group-hover/card:text-black"
								>
									{moment(startDate).from(endDate, true)}
								</p>
							{/if}
						</div>
						<div class="flex flex-col gap-1">
							<h3
								class="font-semibold text-lg transition-all group-hover/card:text-theme-600"
							>
								{event.title}
							</h3>
							<p class="text-muted-foreground text-sm">
								{event.description}
							</p>
							{#if event.tags && event.tags?.length > 0}
								<div
									class="flex gap-2 mt-3 flex-wrap group/skill-list"
								>
									{#each event.tags as tag}
										<div
											class="rounded-md bg-theme-200 border hover:!opacity-100 group-hover/skill-list:opacity-60 transition-all border-theme-500 text-theme-foreground p-2 py-1 text-xs"
										>
											{tag}
										</div>
									{/each}
								</div>
							{/if}
						</div>
					</div>
				</a>
			{/each}
		</div>
	</div>
</div>
