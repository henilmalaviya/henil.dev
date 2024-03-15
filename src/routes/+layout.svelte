<script lang="ts">
    import "../app.pcss";
    import Navbar from "./Navbar.svelte";
    import "tippy.js/dist/tippy.css";
    import colors from "tailwindcss/colors";
    import { onMount } from "svelte";

    let lanternRef: HTMLDivElement;

    function setLantern(x: number | boolean, y: number) {
        if (x === false) {
            lanternRef.style.background = `none`;
            return;
        }
        lanternRef.style.background = `radial-gradient(500px at ${x}px ${y}px, ${colors.gray[200]}, ${colors.transparent} 80%)`;
    }

    function onMouseMove(event: MouseEvent) {
        setLantern(event.pageX, event.pageY);
    }
</script>

<svelte:window on:mousemove={onMouseMove} />

<div
    bind:this={lanternRef}
    class="max-md:hidden absolute top-0 left-0 w-full h-full z-[-2]"
/>

<div
    class="flex-grow relative mx-8 lg:mx-auto max-w-screen-lg leading-relaxed selection:bg-gray-900 selection:text-white"
>
    <slot />
</div>
