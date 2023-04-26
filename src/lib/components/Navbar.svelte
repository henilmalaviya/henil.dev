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
        {""}
    </svelte:fragment>
    <svelte:fragment slot="trail"><LightSwitch /></svelte:fragment>
</AppBar>
