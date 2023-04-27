<script>
    import { AppBar, LightSwitch } from "@skeletonlabs/skeleton";
    import { GITHUB } from "@/lib/const";
</script>

<AppBar
    gridColumns="grid-cols-3"
    slotDefault="place-self-center"
    slotTrail="place-content-end"
>
    <svelte:fragment slot="lead">
        <div class="flex gap-4">
            <a href="#intro">Intro</a>
            <a href="#about">About</a>
            <a href="#links">Links</a>
            <a href="#projects">Projects</a>
        </div>
    </svelte:fragment>
    <svelte:fragment slot="trail"><LightSwitch /></svelte:fragment>
</AppBar>
