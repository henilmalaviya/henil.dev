<script lang="ts">
    import Icon from "@iconify/svelte";

    export let icon: string;
</script>

<div class="w-fit h-fit cursor-pointer">
    <Icon {icon} />
</div>
