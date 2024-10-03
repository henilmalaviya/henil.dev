<script lang="ts">
	import '../app.pcss';
	import 'tippy.js/dist/tippy.css';
</script>

<svelte:head>
	<meta name="title" content="Henil Malaviya" />
	<meta name="description" content="Indie self-taught web developer" />
	<meta
		name="keywords"
		content="henil, malaviya, indie developer, developer, web developer"
	/>
	<meta name="robots" content="index, follow" />
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta name="language" content="English" />
	<meta name="revisit-after" content="2 days" />
	<meta name="author" content="Henil Malaviya" />
</svelte:head>

<div
	class="flex-grow relative mx-8 lg:mx-auto max-w-screen-lg leading-relaxed selection:bg-gray-900 selection:text-white"
>
	<slot />
</div>
