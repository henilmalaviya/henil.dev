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
<AppShell class="w-[1000px] max-md:w-screen py-4 px-6 scroll-smooth	">
    <Navbar />
    <div class="mb-8" />
    <slot />
</AppShell>
