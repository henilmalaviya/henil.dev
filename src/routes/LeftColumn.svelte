<script lang="ts">
    import Icon from "@iconify/svelte";
    import { Icons } from "$lib/const/icons";
    import { tippy } from "svelte-tippy";
    import { Button } from "$lib/components/ui/button";
    import * as Social from "$lib/const/social";
    import TopLC from "./Top.LC.svelte";
    import BottomLC from "./Bottom.LC.svelte";
</script>

<div
    class="lg:sticky lg:justify-between lg:top-0 max-h-screen lg:w-1/2 lg:max-h-screen flex flex-col pt-16 pb-8 lg:py-32"
>
    <TopLC />
    <BottomLC />
</div>
