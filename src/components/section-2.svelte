<script lang="ts">
    import { SquareTwitterBrand, SquareGithubBrand, SquareYoutubeBrand, MediumBrand } from 'svelte-awesome-icons'

</script>

<div class="w-full min-h-screen flex px-16 py-32">
    <div class="flex items-center flex-col w-full">
        <p class="text-xl">You can Find me at...</p>
        <div class="my-2" />
        <div class="flex">
            <div class="tooltip tooltip-bottom" data-tip="Twitter">
                <a href="https://twitter.com/henil0604">
                    <SquareTwitterBrand size="40" color="#1D9BF0" class="cursor-pointer" />
                </a>
            </div>
            <div class="mx-1" />
            <div class="tooltip tooltip-bottom" data-tip="Github">
                <a href="https://github.com/henil0604">
                    <SquareGithubBrand size="40" color="#F0F0F1" class="cursor-pointer" />
                </a>
            </div>
            <div class="mx-1" />
            <div class="tooltip tooltip-bottom" data-tip="Youtube">
                <a href="https://youtube.com/@henil0604">
                    <SquareYoutubeBrand size="40" color="#FF0000" class="cursor-pointer" />
                </a>
            </div>
            <div class="mx-1" />
            <div class="tooltip tooltip-bottom" data-tip="Medium">
                <a href="https://henil0604.medium.com">
                    <MediumBrand size="40" color="#010101" class="cursor-pointer" />
                </a>
            </div>
        </div>
    </div>
</div>