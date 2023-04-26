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
<AppShell class="p-0 scroll-smooth pb-20 max-md:px-0 max-md:py-0">
    <Navbar />
    <div class="mb-0" />
    <div class="px-10">
        <slot />
    </div>
</AppShell>
