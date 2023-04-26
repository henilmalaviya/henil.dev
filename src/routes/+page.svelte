<script>
    import { EMAIL } from "@/lib/const";
    import { Avatar } from "@skeletonlabs/skeleton";
</script>

<svelte:head>
    <title>Henil Malaviya</title>
</svelte:head>

<!-- INTRO SECTION -->

<div id="intro" class="">
    <div class="highlight text-xl font-bold">Hi, my name is</div>

    <div class="mb-6" />

    <div class="text-7xl max-md:text-6xl font-extrabold text-blue">
        Henil Malaviya.
    </div>

    <div class="mb-4" />

    <div class="text-muted text-4xl max-md:text-3xl font-extrabold text-blue">
        I build things for the community.
    </div>

    <div class="mb-4" />

    <div
        class="max-w-[600px] max-md:max-w-[350px] max-sm:max-w-fit max-sm:pr-12 text-muted"
    >
        I'm a self taught web developer specializing in building backends (and
        occasionally frontend). I'm focused on building robust & secure
        applications. My future goal is to become cyber security expert.
    </div>

    <div class="mb-4" />

    <!-- Contact me -->
    <a href={`mailto:${EMAIL}`} class="btn variant-ghost-primary">Contact Me</a>
</div>

<div class="mb-[460px]" />

<!-- ABOUT SECTION -->

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
        <div class="flex-center min-w-[300px] max-w-[350px] max-sm:w-[100px]">
            <Avatar
                src={"https://henil.xyz/henil-malaviya.jpg"}
                rounded="rounded-full"
                width="min-w-full"
            />
        </div>

        <!-- About -->
        <div class="max-md:max-w-[350px] max-sm:max-w-fit pr-10">
            Hello, My name is <span class="highlight">Henil Malaviya</span>. I
            enjoy creating web applications that provides robust experience of
            security & UI. I started my journy in
            <span class="highlight">2019</span> by learning HTML & CSS. In the
            lockdown time i developed skills in Javascript & Javascript
            Ecosystem. In 2021 I finally started to love
            <span class="highlight">Typescript</span>. I loved typescript so
            much that i never developed apps without typescript. Back in 2022 i
            learned frameworks like
            <span class="highlight">React, Vue, NextJs, NuxtJs, NestJs</span>,
            etc... In the mean time i learned Linux Fundamentals and fell in
            love with <span class="highlight">Docker</span>. I love finding Bugs
            in web applications.
        </div>
    </div>
</div>
