<script lang="ts">
    import { onMount } from "svelte";
    import type { GithubResponse } from "./api/github/type";
    import Icon from "@iconify/svelte";
    import { Icons } from "$lib/const/icons";
    import moment from "moment";
    import tippy from "svelte-tippy";
    import { Skeleton } from "$lib/components/ui/skeleton";

    let apiResponse: Promise<GithubResponse> | null = new Promise((_, reject) =>
        setTimeout(reject, 1000)
    );

    onMount(async () => {
        apiResponse = fetch("/api/github").then((res) => res.json());
    });
</script>

{#await apiResponse}
    <div>
        <div class="my-2">
            <Skeleton class="h-[25px] w-[80px]" />
        </div>
        <Skeleton class="mb-3 w-full h-[3px]" />
        <div>
            <div>
                <Skeleton class="h-[18px] w-[150px]" />
            </div>
            <div class="my-2"></div>
            <div class="space-y-1">
                {#each Array(3) as i}
                    <div
                        class="flex p-2 justify-start items-center w-full max-h-fit gap-2"
                    >
                        <Skeleton class="w-[40px] h-[40px]" />
                        <Skeleton class="w-full h-[25px]" />
                    </div>
                {/each}
            </div>
        </div>

        <div class="my-4"></div>

        <div>
            <div>
                <Skeleton class="h-[18px] w-[150px]" />
            </div>
            <div class="my-2"></div>
            <div class="space-y-3">
                {#each Array(3) as i}
                    <Skeleton class="w-full h-[100px]" />
                {/each}
            </div>
        </div>
    </div>
{:then data}
    <div>
        <div class="uppercase font-semibold my-2">Activity</div>
        <hr class="mb-3" />
        <div>
            <!-- latest commits -->
            {#if data?.recent_commits}
                <div>
                    <!-- title -->
                    <div class="text-muted-foreground text-sm">
                        Recent Github commits
                    </div>
                    <!-- list -->
                    <div class="my-2"></div>
                    <div class="space-y-1">
                        {#each data.recent_commits as commit}
                            <div
                                class="flex justify-start items-start w-full p-2 max-h-fit gap-2"
                            >
                                <div>
                                    <Icon
                                        height={24}
                                        icon={Icons.GitCommitVertical}
                                    />
                                </div>
                                <div class="min-w-full">
                                    <span>
                                        <a
                                            title={commit.commit_message}
                                            target="_blank"
                                            href={commit.html_url}
                                            class="hover:underline whitespace-nowrap text-sm overflow-hidden text-ellipsis"
                                        >
                                            {commit.commit_message}
                                        </a>
                                    </span>
                                    <span class="text-muted-foreground text-sm"
                                        >on</span
                                    >
                                    <span>
                                        <a
                                            href={commit.repository.html_url}
                                            target="_blank"
                                            class="hover:underline text-sm"
                                        >
                                            {commit.repository.full_name}
                                        </a>
                                    </span>
                                    <span
                                        class="text-muted-foreground text-xs"
                                        title={commit.timestamp}
                                        >({moment(commit.timestamp).fromNow(
                                            true
                                        )})</span
                                    >
                                </div>
                            </div>
                        {/each}
                    </div>
                </div>
            {/if}

            <div class="my-4"></div>
            <!-- active repos -->
            {#if data?.active_repos}
                <div>
                    <!-- title -->
                    <div class="text-muted-foreground text-sm">
                        Recently Updated Repos
                    </div>
                    <!-- list -->
                    <div class="my-2"></div>
                    <div class="space-y-3 group/repo-list">
                        {#each data.active_repos as repo}
                            <div
                                class="border hover:!opacity-100 transition-all group-hover/repo-list:opacity-50 rounded flex w-full h-fit p-3 gap-2"
                            >
                                <div>
                                    <Icon
                                        height={28}
                                        icon={Icons.Social.Github}
                                    />
                                </div>
                                <div class="flex-grow">
                                    <a
                                        target="_blank"
                                        class="hover:underline"
                                        href={repo.html_url}>{repo.full_name}</a
                                    >
                                    <div class="text-muted-foreground text-sm">
                                        {repo.description}
                                    </div>

                                    <div class="my-6" />
                                    <div
                                        class="flex gap-1.5 flex-wrap group/lang-list"
                                    >
                                        {#each Object.keys(repo.languages).slice(0, 4) as languageName}
                                            <div
                                                class="rounded-lg px-2 py-1 hover:!opacity-100 transition-all group-hover/lang-list:opacity-50 text-xs border max-md:px-1.5 text-theme-foreground border-theme-700 bg-theme-200"
                                            >
                                                {languageName}
                                            </div>
                                        {/each}
                                    </div>
                                </div>
                                <div
                                    class="flex items-start justify-end gap-1 [&>*]:h-fit"
                                >
                                    {#if repo.is_fork || false}
                                        <div
                                            use:tippy={{
                                                content: "Forked Repository",
                                            }}
                                            class="flex items-center py-1"
                                        >
                                            <Icon
                                                icon={Icons.Fork}
                                                height={20}
                                            />
                                        </div>
                                    {/if}
                                    {#if repo.star_count && repo.star_count > 0}
                                        <div
                                            class="flex group items-center gap-1"
                                        >
                                            <Icon
                                                class="group-hover:text-amber-500 group-hover:stroke-amber-500"
                                                icon={Icons.Star}
                                            />
                                            <span>{repo.star_count}</span>
                                        </div>
                                    {/if}
                                </div>
                            </div>
                        {/each}
                    </div>
                </div>
            {/if}
        </div>
    </div>
{:catch error}
    <!--  -->
{/await}
