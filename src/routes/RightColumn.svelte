<script>
    import AboutRC from "./About.RC.svelte";
    import ActivityRC from "./Activity.RC.svelte";
</script>

<div class="pt-0 pb-16 lg:pt-32 lg:w-1/2 flex flex-col">
    <AboutRC />
    <div class="my-3"></div>
    <ActivityRC />
    <div class="my-16"></div>
    <hr class="mb-4" />
    <div class="text-gray-700 text-sm">
        <div>
            Built with <a
                target="_blank"
                href="https://kit.svelte.dev"
                class="text-black">SvelteKit</a
            >
            +
            <a href="https://tailwindcss.com" target="_blank" class="text-black"
                >Tailwind CSS</a
            >
        </div>
        <div>
            Design <b>heavily</b> Inspired by
            <a
                href="https://brittanychiang.com"
                target="_blank"
                class="text-black">brittanychiang.com</a
            >
        </div>
        <div>
            Deployed with <a
                target="_blank"
                class="text-black"
                href="https://vercel.com">Vercel</a
            >
        </div>
    </div>
</div>
