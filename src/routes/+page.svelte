<script lang="ts">
	import LeftColumn from './LeftColumn.svelte';
	import RightColumn from './RightColumn.svelte';
</script>

<svelte:head>
	<title>Henil Malaviya</title>
</svelte:head>

<div class="flex flex-col lg:flex-row justify-between main-wrapper gap-4">
	<LeftColumn />
	<RightColumn />
</div>
