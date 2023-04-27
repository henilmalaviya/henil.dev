<script lang="ts">
    // The ordering of these imports is critical to your app working properly
    import "@skeletonlabs/skeleton/themes/theme-rocket.css";
    // If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
    import "@skeletonlabs/skeleton/styles/all.css";
    // Most of your app wide CSS should be put in this file
    import "iconify-icon";
    import "../app.postcss";
    import { AppShell, AppBar, LightSwitch } from "@skeletonlabs/skeleton";
    import Navbar from "@/lib/components/Navbar.svelte";
</script>

<div id="top" />
<!-- App Shell -->
<AppShell class="p-0 scroll-smooth max-md:px-0 max-md:py-0">
    <svelte:fragment slot="pageHeader"><Navbar /></svelte:fragment>
    <div class="mb-0" />
    <div class="px-10">
        <slot />
    </div>
    <svelte:fragment slot="pageFooter">
        <div class="w-full py-3 flex-center gap-2">
            <a
                href="https://www.patreon.com/henil"
                target="_blank"
                class="btn variant-ghost-tertiary">Sponser Me</a
            >
        </div>
    </svelte:fragment>
</AppShell>
