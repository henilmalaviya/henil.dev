<script>
    import { Button } from "$lib/components/ui/button";
    import { Icons } from "$lib/const/icons";
    import Icon from "@iconify/svelte";
    import * as Social from "$lib/const/social";
</script>

<div class="pt-10 max-lg:pt-10">
    <!-- SOCIALS -->
    <div class="flex gap-3">
        <Button
            variant="ghost"
            target="_blank"
            href="https://github.com/{Social.GithubUsername}"
            class="p-1"
            aria-label="Redirects to Github"
        >
            <Icon
                icon={Icons.Social.Github}
                class="text-[26px] lg:text-[30px]"
            />
        </Button>
        <Button
            variant="ghost"
            target="_blank"
            href="https://x.com/{Social.XUsername}"
            aria-label="Redirects to X"
            class="p-1"
        >
            <Icon icon={Icons.Social.X} class="text-[26px] lg:text-[30px]" />
        </Button>
        <Button
            variant="ghost"
            target="_blank"
            href="https://linkedin.com/in/{Social.LinkedInUsername}"
            class="p-1"
            aria-label="Redirects to Linkedin"
        >
            <Icon
                icon={Icons.Social.LinkedIn}
                class="text-[26px] lg:text-[30px]"
            />
        </Button>
    </div>
</div>
