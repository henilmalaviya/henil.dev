<script lang="ts">
    import Icon from "@iconify/svelte";
    import { Icons } from "$lib/const/icons";
    import { tippy } from "svelte-tippy";
    import { Button } from "$lib/components/ui/button";
    import * as Social from "$lib/const/social";
</script>

<div class="flex flex-col lg:flex-row justify-between main-wrapper gap-4">
    <div
        class="lg:sticky justify-between lg:top-0 max-h-screen lg:w-1/2 lg:max-h-screen flex flex-col pt-16 pb-8 lg:py-32"
    >
        <!-- top -->
        <div class="">
            <div class="text-xl md:text-2xl">Hey, I am</div>
            <div
                class="text-4xl leading-tight md:leading-snug md:text-5xl font-extrabold"
            >
                Henil Malaviya
            </div>
            <div class="text-md lg:text-lg max-w-lg font-medium">
                <span
                    use:tippy={{
                        content: "Mostly personal projects",
                        placement: "left",
                        delay: [1000, 0],
                    }}>Indie</span
                > self-taught web developer.
            </div>
            <div class="my-1" />
            <div>I build robust and secure web applications.</div>
            <div class="my-3" />
            <div>
                <Button
                    href="mailto:{Social.Email}"
                    class="transition-all duration-500 w-fit hover:bg-transparent border-2 border-transparent hover:border-black hover:text-black hover:rounded-[90px]"
                    size="sm">Reach me</Button
                >
            </div>
        </div>
        <!-- down -->
        <div class="pt-10 max-lg:pt-10">
            <div class="flex gap-3">
                <Button
                    variant="ghost"
                    target="_blank"
                    href="https://github.com/{Social.GithubUsername}"
                    class="p-1"
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
                    class="p-1"
                >
                    <Icon
                        icon={Icons.Social.X}
                        class="text-[26px] lg:text-[30px]"
                    />
                </Button>
                <Button
                    variant="ghost"
                    target="_blank"
                    href="https://linkedin.com/in/{Social.LinkedInUsername}"
                    class="p-1"
                >
                    <Icon
                        icon={Icons.Social.LinkedIn}
                        class="text-[26px] lg:text-[30px]"
                    />
                </Button>
            </div>
        </div>
    </div>
    <div class="pt-0 lg:pt-32 lg:w-1/2 flex flex-col">
        <div class="uppercase font-semibold lg:hidden my-4">About</div>
        <div class="flex flex-col gap-4">
            <div>
                In <span title="Yeh! Before Covid-19 :)">2020</span>, I started
                to get my hands dirty with web development and fast forward to
                <span title={new Date().toLocaleDateString()}>today</span>, i
                have build several different kinds of projects around full stack
                web development.
            </div>
            <div>
                I focus to build projects that focuses around web security and
                simplicity. <span title="maybe in 2022">Recently</span> I
                stumbled upon <span title="Oh Lovely Svelte!!!">Svelte</span>
                and loved the simplicity it offers. I have been working with Svelte
                for more then a year.
                <span title="Including this one!"
                    >I built several projects that uses Svelte.</span
                >
                <span title="Don't worry i don't hate them :)"
                    >I have also worked with React and Vue <span
                        title="in 2021 & 2022">few years ago</span
                    >.</span
                >
            </div>
            <div>
                When i am not on my laptop, <span title="yeah, pure labor :O"
                    >i am probably filling collage assignments :)</span
                >
            </div>
        </div>
    </div>
</div>
