<script lang="ts">
	import Icon from '@iconify/svelte';

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
			title: 'React Intern at Ssessa',
			description:
				'Developing and maintaining react based web applications.',
			range: [new Date('13 May 2024'), null],
			href: 'https://ssessa.com',
			tags: ['React', 'JavaScript', 'React-Redux'],
		},
	];
</script>

<div>
	<div class="uppercase font-semibold my-2">Experience</div>
	<hr class="mb-3" />
	<div class="flex flex-col gap-4">
		<div class="flex flex-col gap-6 group/card-list">
			{#each experiences as event}
				{@const rangeFull = `${event.range[0].toLocaleDateString('en-US', { dateStyle: 'long' })} - ${event.range[1] ? event.range[1].toLocaleDateString('en-US', { dateStyle: 'long' }) : 'Present'}`}
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
								{getShortMonth(event.range[0])}
								{event.range[0].getFullYear()} - {event
									.range[1] === null
									? 'Present'
									: `${getShortMonth(event.range[1])} ${event.range[1].getFullYear()}`}
							</p>
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
