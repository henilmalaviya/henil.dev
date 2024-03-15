<script lang="ts">
    import "../app.pcss";
    import "tippy.js/dist/tippy.css";
    import colors from "tailwindcss/colors";

    let lanternRef: HTMLDivElement;

    function setLantern(x: number | boolean, y: number) {
        if (x === false) {
            lanternRef.style.background = `none`;
            return;
        }
        lanternRef.style.background = `radial-gradient(500px at ${x}px ${y}px, ${colors.gray[50]}, ${colors.transparent} 50%)`;
    }

    function onMouseMove(event: MouseEvent) {
        // setLantern(event.pageX, event.pageY);
    }
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
    <meta name="revisit-after" content="3 days" />
    <meta name="author" content="Henil Malaviya" />
</svelte:head>

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
