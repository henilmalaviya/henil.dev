<script>
    import AnimatedElement from "@/lib/components/AnimatedElement.svelte";
    import Projects from "@/lib/components/Projects.svelte";
    import {
        EMAIL,
        GITHUB,
        ICONS,
        PROJECTS,
        TWITTER,
        YOUTUBE,
    } from "@/lib/const";
    import { Avatar } from "@skeletonlabs/skeleton";
</script>

<svelte:head>
    <title>Henil Malaviya</title>
</svelte:head>

<!-- INTRO SECTION -->

<div id="intro" class="pt-32 max-sm:pt-16">
    <div class="highlight text-xl max-md:text-base max-sm:text-sm font-bold">
        Hi, my name is
    </div>

    <div class="mb-6" />

    <div
        class="text-7xl max-md:text-6xl max-sm:text-4xl font-extrabold text-blue"
    >
        Henil Malaviya.
    </div>

    <div class="mb-4" />

    <div
        class="text-muted text-4xl max-md:text-3xl max-sm:text-2xl font-extrabold text-blue"
    >
        I build things for the community.
    </div>

    <div class="mb-4" />

    <div
        class="max-w-[600px] max-md:max-w-[350px] max-sm:max-w-fit text-muted max-sm:text-sm"
    >
        I'm a self taught web developer specializing in building backends (and
        occasionally frontend). I'm focused on building robust & secure
        applications. My future goal is to become cyber security expert.
    </div>

    <div class="mb-8" />

    <!-- Contact me -->
    <a href={`mailto:${EMAIL}`} class="btn variant-ghost-primary">Contact Me</a>
</div>

<div class="mb-[460px] max-sm:mb-[400px]" />

<!-- ABOUT SECTION -->

<AnimatedElement>
    <div id="about" class="">
        <div class="title">
            <span class="highlight">00.</span>
            About
        </div>
        <div class="mb-6" />

        <!-- Content -->
        <div
            class="flex items-start max-md:items-center max-md:flex-col gap-20 max-md:gap-10"
        >
            <!-- Avatar -->
            <!-- <AnimatedElement> -->
            <div class="flex-center">
                <Avatar
                    src={"/henil.jpg"}
                    rounded="rounded-full"
                    width="w-[350px] max-sm:w-[200px]"
                    class="bg-cover bg-top"
                />
            </div>
            <!-- </AnimatedElement> -->

            <!-- About -->
            <!-- <AnimatedElement> -->
            <div
                class="max-sm:max-w-[350px] pr-32 max-md:pr-0 max-sm:text-sm flex flex-col gap-6"
            >
                <p>
                    Hello, My name is Henil Malaviya. I enjoy creating web
                    applications that provides robust experience of security &
                    UI. I started my journy in 2019 by learning HTML & CSS. In
                    the lockdown time i developed skills in Javascript &
                    Javascript Ecosystem. In 2021 I finally started to love
                    Typescript. I loved typescript so much that i never
                    developed apps without typescript. Back in 2022 i learned
                    frameworks like React, Vue, NextJs, NuxtJs, NestJs,
                    SvelteKit, etc... In the mean time i learned Linux
                    Fundamentals and fell in love with Docker. I love finding
                    Bugs in web applications.
                </p>
                <div class="flex gap-3 flex-wrap">
                    <p>Tech Used:</p>
                    <div class="flex-center flex-wrap gap-2 text-3xl">
                        <iconify-icon icon={ICONS.SVELTE} />
                        <iconify-icon icon={ICONS.TYPESCRIPT} />
                        <iconify-icon icon={ICONS.GITHUB} />
                        <iconify-icon icon={ICONS.VERCEL} />
                        <iconify-icon icon={ICONS.MONGODB} />
                        <iconify-icon icon={ICONS.NEXTJS} />
                        <iconify-icon icon={ICONS.SUPABASE} />
                        <iconify-icon icon={ICONS.JAVASCRIPT} />
                        <iconify-icon icon={ICONS.CSS} />
                        <iconify-icon icon={ICONS.HTML} />
                        <iconify-icon icon={ICONS.SCSS} />
                        <iconify-icon icon={ICONS.REACT} />
                        <iconify-icon icon={ICONS.VUE} />
                        <iconify-icon icon={ICONS.NUXT} />
                        <iconify-icon icon={ICONS.NESTJS} />
                        <iconify-icon icon={ICONS.MYSQL} />
                        <iconify-icon icon={ICONS.PHP} />
                        <iconify-icon icon={ICONS.VITE} />
                        <iconify-icon icon={ICONS.DOCKER} />
                        <iconify-icon icon={ICONS.LINUX} />
                        <iconify-icon icon={ICONS.KALI_LINUX} />
                    </div>
                </div>
            </div>

            <!-- </AnimatedElement> -->
        </div>
    </div>
</AnimatedElement>

<div class="mb-[100px]" />

<!-- Links Section -->

<AnimatedElement>
    <div id="links" class="">
        <div class="title">
            <span class="highlight">01.</span>
            Links
        </div>
        <div class="mb-6" />
        <div class="flex gap-2 flex-wrap">
            <a
                href={`mailto:${EMAIL}`}
                target="_blank"
                class="btn max-sm:btn-sm rounded-sm variant-ghost-error gap-2 w-fit"
            >
                <iconify-icon
                    icon={ICONS.EMAIL}
                    class="text-4xl max-sm:text-2xl"
                /> Email
            </a>
            <a
                href={TWITTER}
                target="_blank"
                class="btn max-sm:btn-sm rounded-sm variant-ghost-secondary gap-2 w-fit"
            >
                <iconify-icon
                    icon={ICONS.TWITTER}
                    class="text-4xl max-sm:text-2xl"
                /> Twitter
            </a>
            <a
                href={GITHUB}
                target="_blank"
                class="btn max-sm:btn-sm rounded-sm variant-ghost-surface gap-2 w-fit"
            >
                <iconify-icon
                    icon={ICONS.GITHUB}
                    class="text-4xl max-sm:text-2xl"
                /> Github
            </a>
            <a
                href={YOUTUBE}
                target="_blank"
                class="btn max-sm:btn-sm rounded-sm variant-ghost-error gap-2 w-fit"
            >
                <iconify-icon
                    icon={ICONS.YOUTUBE}
                    class="text-4xl max-sm:text-2xl"
                /> Youtube
            </a>
        </div>
    </div>
</AnimatedElement>

<div class="mb-[100px]" />

<!-- Projects Section -->
<AnimatedElement>
    <div id="projects" class="">
        <div class="title">
            <span class="highlight">02.</span>
            Projects
        </div>
        <div class="mb-6" />

        <div class="flex gap-3 flex-wrap">
            <Projects />
        </div>
    </div>
</AnimatedElement>

<div class="mb-[200px]" />
