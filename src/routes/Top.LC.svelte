<script>
	import { Button } from '$lib/components/ui/button';
	import tippy from 'svelte-tippy';
	import * as Social from '$lib/const/social';
</script>

<div class="">
	<div class="text-lg md:text-2xl">Hey, I am</div>
	<div
		class="text-4xl leading-tight md:leading-snug md:text-5xl font-extrabold"
	>
		Henil Malaviya
	</div>
	<div class="text-lg lg:text-xl max-w-lg font-medium">
		<span
			use:tippy={{
				content: 'Mostly personal projects',
				placement: 'left',
				delay: [1000, 0],
			}}>Indie</span
		> self-taught web developer.
	</div>
	<div class="my-2" />
	<div class="text-md tracking-tight text-gray-700">
		I specialize in developing secure and robust web applications.
	</div>
	<!-- INSTANT CONTACT BUTTON -->
	<div class="my-4" />
	<div>
		<Button
			href="mailto:{Social.Email}"
			class="transition-all duration-500 w-fit hover:bg-transparent border-2 border-transparent hover:border-black hover:text-black hover:rounded-[90px]"
			size="sm">Reach me</Button
		>
	</div>
	<div class="my-8"></div>
	<div>
		<h2 class="text-lg font-semibold">Core Principles</h2>
		<div class="my-2"></div>
		<ul class="list-inside list-disc">
			<li>Projects over Certificates</li>
			<li>Experience over Knowledge</li>
			<li>Reason over Belief</li>
			<li>
				Building what i <b><span class="text-theme-700">need</span></b>
			</li>
		</ul>
	</div>
</div>
