<script>
	import { gameStats, toggleFocusMode } from '$lib/store/index.svelte';
	import { humanizeNumber } from '$lib/utils';
	import Icon from '@iconify/svelte';
</script>

{#snippet FocusMode()}
	<div class="tooltip tooltip-top z-10" data-tip="Toggle focus mode">
		<label class="swap swap-rotate rounded-full p-4">
			<input type="checkbox" oninput={toggleFocusMode} />

			<Icon
				icon="lucide:gamepad"
				class="swap-on fill-neutral-content h-4 w-4"
			/>

			<Icon
				icon="lucide:moon"
				class="swap-off fill-neutral-content h-4 w-4"
			/>
		</label>
	</div>
{/snippet}

<div class="card glass min-w-fit shadow-md transition hover:shadow-lg">
	<div class="card-body relative">
		<div class="absolute -top-2 -right-2">
			{@render FocusMode()}
		</div>
		<h1 class="w-full min-w-fit text-lg">Game of Life Stats</h1>
		<hr class="text-base-300" />
		<div class="text-lg">
			<div class="flex items-center gap-1">
				🧬 Gen
				<span class="text-secondary font-semibold"
					>#{gameStats.generation}</span
				>
			</div>
			<div class="flex items-center gap-1">
				🌱 Born:
				<span class="text-secondary font-semibold"
					>{humanizeNumber(gameStats.totalCellBirthCount)}</span
				>
			</div>
			<div class="flex items-center gap-1">
				💀 R.I.P:
				<span class="text-secondary font-semibold">
					{humanizeNumber(gameStats.totalCellDeathCount)}
				</span>
			</div>
			<div class="flex items-center gap-1">
				👥 Observers:
				<span class="text-secondary font-semibold">
					{gameStats.activePlayers}
				</span>
			</div>
		</div>
	</div>
</div>
