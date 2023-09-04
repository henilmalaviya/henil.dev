<script>
    import { Button } from "$components/ui/button";
    import {
        EMAIL,
        GITHUB,
        ICONS,
        LINKS,
        NAME,
        PROJECTS,
        YOUTUBE,
    } from "$lib/const";
    import { darkMode } from "$lib/store";
    import setDarkMode from "$lib/utils";
    import Icon from "@iconify/svelte";
    import Section1Effect from "$components/ui/svgs/section1.svelte";
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<Button
    class="fixed right-10 top-10 rounded-full px-2 z-[10] text-xl [&>*]:pointer-events-none"
    on:click={() => {
        setDarkMode(!$darkMode);
        $darkMode = !$darkMode;
    }}
>
    {#if $darkMode}
        <Icon icon={ICONS.MOON} />
    {:else}
        <Icon icon={ICONS.SUN} />
    {/if}
</Button>

<!-- PAGE -->
<div
    id="container"
    class="w-full h-full flex flex-col relative enhanced-scroll"
>
    <!-- Landing -->
    <div id="section" class="tracking-tighter">
        <!-- EFFECTS -->
        <div id="decoration">
            <Section1Effect />
        </div>

        <div class="text-lg">Hey, My name is</div>
        <div class="mt-3" />
        <div class="text-5xl tracking-wide font-semibold">
            {NAME}
        </div>
        <div class="mt-2" />
        <div class="text-xl">I build things for the community.</div>
        <div class="mt-2" />
        <div class="text-sm text-balance max-w-lg">
            I'm a self taught web developer specializing in building backends
            (and occasionally frontend). I'm focused on building robust & secure
            applications.
        </div>
        <div class="mt-4" />
        <Button href="mailto:{EMAIL}">Contact Me</Button>
    </div>

    <!-- About Me -->
    <div id="section" class="tracking-tighter">
        <div id="decoration">
            <Section1Effect />
        </div>
        <h2>About Me</h2>
        <div class="my-5" />
        <div class="flex max-md:flex-col max-w-4xl gap-4">
            <img
                id="avatar"
                class="w-52 max-md:w-32 h-fit max-md:mx-auto rounded-sm"
                src="/henil.jpg"
                alt=""
            />
            <div
                class="tracking-tighter text-[14px] bg-background rounded-sm text-foreground p-3 shadow-md h-fit border"
            >
                Hi, I'm Henil, a passionate web developer living in India with
                three years of experience in creating dynamic and user-friendly
                websites. I thrive on turning complex ideas into intuitive and
                visually appealing digital experiences. My journey in web
                development began during my high school years. I have honed my
                skills in full-stack development, specializing technologies like
                CSS, JavaScript, and various frameworks like NodeJs, Svelte and
                few more. I have worked with <a
                    class="link"
                    target="_blank"
                    href="https://snetgh.net">Step Network</a
                >.
            </div>
        </div>
    </div>

    <!-- Projects -->
    <div id="section" class="tracking-tighter">
        <div id="decoration">
            <Section1Effect />
        </div>
        <h2>Work</h2>
        <div class="my-3" />
        <div class="flex flex-wrap gap-2">
            {#each PROJECTS as project}
                <div
                    class="bg-background text-foreground flex flex-col shadow-md rounded-sm border w-fit h-fit p-3 px-5 transition hover:shadow-xl min-w-[300px] max-sm:min-w-full"
                >
                    <h4>
                        {project.name}
                    </h4>
                    <div class="my-1" />
                    <div class="flex gap-2">
                        {#each project.links as link}
                            <a
                                class="link text-2xl"
                                target="_blank"
                                href={link.href}
                            >
                                <Icon icon={link.icon} />
                            </a>
                        {/each}
                    </div>
                    <div>{project.description}</div>
                    <div class="my-1" />
                    <div class="flex justify-end gap-2">
                        {#each project.tech as tech}
                            <Icon icon={tech} />
                        {/each}
                    </div>
                </div>
            {/each}
        </div>
    </div>

    <!-- Links -->
    <div id="section" class="tracking-tighter">
        <div id="decoration">
            <Section1Effect />
        </div>
        <h2>Links</h2>
        <div class="my-3" />
        <div class="grid grid-cols-3 max-sm:grid-cols-1 w-fit gap-2">
            {#each LINKS as link}
                <a
                    target="_blank"
                    class="flex justify-center transition items-center gap-2 bg-background text-foreground p-2 shadow-md hover:shadow-xl hover:-translate-y-1 rounded-sm {link.class}"
                    href={link.href}
                >
                    <Icon class="text-xl" icon={link.icon} />
                    {link.name}
                </a>
            {/each}
        </div>
    </div>
</div>

<style scoped lang="postcss">
    #container {
        overflow-y: auto;
        scroll-snap-type: y mandatory;
    }

    #container #section {
        @apply p-10;
        min-height: 100vh;
        scroll-snap-align: start;
        scroll-snap-stop: always;
        position: relative;
    }

    #container #section #decoration {
        @apply absolute top-0 right-0 overflow-hidden max-h-full z-[-1] max-md:hidden;
    }

    #avatar {
        filter: grayscale(0.8);
        transition: 0.3s;
        box-shadow: 0.35rem 0.35rem 0.4rem rgba(0, 0, 0, 0.3);
    }

    #avatar:hover {
        filter: none;
        box-shadow: 0.8rem 0.8rem 0.4rem rgba(0, 0, 0, 0.5);
    }
</style>
