<script lang="ts">
    import clsx from "clsx";
    import { onMount } from "svelte";
    import { elasticInOut } from "svelte/easing";
    import { tweened } from "svelte/motion";
    import { fade } from "svelte/transition";

    export let showLanternAfterMouseLeave = false;

    let className = "";
    export { className as class };

    export let wrapperClassName = "";
    export let hideCursor = false;

    let ref: HTMLDivElement;

    $: showLantern = false;
    $: lanternPositionX = tweened(0, {
        duration: 100,
    });
    $: lanternPositionY = tweened(0, {
        duration: 100,
    });

    onMount(() => {
        ref.addEventListener("mouseenter", (event) => {
            showLantern = true;
        });

        ref.addEventListener("mousemove", (event) => {
            $lanternPositionX = event.clientX;
            $lanternPositionY = event.clientY;
        });

        ref.addEventListener("mouseleave", (event) => {
            showLantern = showLanternAfterMouseLeave;
        });
    });
</script>

<div
    class={clsx(
        "relative w-full h-full overflow-hidden",
        hideCursor ? "cursor-none" : null,
        wrapperClassName
    )}
    bind:this={ref}
>
    {#if showLantern}
        <div
            transition:fade
            class={clsx(
                "absolute w-[150%] blur-xl h-[150%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-radial from-gray-300 to-white",
                className
            )}
            style="top: {$lanternPositionY}px; left: {$lanternPositionX}px;"
        ></div>
    {/if}
</div>
