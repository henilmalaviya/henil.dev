<script lang="ts">
    import { GITHUB, GITHUB_USERNAME, PROJECTS } from "@/lib/const";
    import { onMount } from "svelte";
    import fetchGithubRepo from "@/lib/utils/fetchGithubRepo";

    type Project = {
        name: string;
        description: string;
        url: string;
        urls?: {
            [key: string]: any;
        };
        tech?: string[];
    };

    let Projects: Project[] = [];

    async function fetchProjects() {
        let projects: Project[] = [];
        for (const project of PROJECTS) {
            let pr: Project | null = null;
            // GITHUB
            if (project.type === "github") {
                const data = await fetchGithubRepo(project.name);
                if (!data) continue;

                pr = {
                    name: data.name,
                    description: data.description,
                    url: data.html_url,
                    urls: { github: data.html_url, ...project.urls },
                };
            }

            // WEBSITE
            if (project.type === "website") {
                pr = {
                    name: project.name,
                    description: project.description!,
                    url: project.url!,
                    urls: { ...project.urls },
                };
            }

            if (!pr) continue;

            pr.tech = project.tech!;

            projects.push(pr);
        }

        return projects;
    }

    onMount(async () => {
        Projects = await fetchProjects();
    });
</script>

{#each Projects as project}
    <a
        href={project.url}
        target="_blank"
        class="card shadow-md rounded-md cursor-pointer min-h-[150px] min-w-[300px] max-w-[400px] max-md:min-w-full"
    >
        <header class="card-header">
            <span class="highlight text-xl">{project.name}</span>
        </header>

        <section class="p-4 pt-0">
            <div class="mt-3 flex flex-wrap">
                {#if project.urls}
                    {#each Object.entries(project.urls) as [key, url]}
                        <a class="" href={url} target="_blank">
                            <iconify-icon
                                class="text-4xl"
                                icon={`mdi:${key}`}
                            />
                        </a>
                    {/each}
                {/if}
            </div>
            {project.description}
            {#if project.tech}
                <div class="mt-3" />
                <div class="flex gap-1 flex-wrap">
                    {#each project.tech as tech}
                        <iconify-icon class="text-2xl" icon={`${tech}`} />
                    {/each}
                </div>
            {/if}
        </section>
    </a>
{/each}
