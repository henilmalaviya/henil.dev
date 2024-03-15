import type { getLastNCommits, getMostActiveRepositories } from "./util";

export type RecentCommit = Awaited<ReturnType<typeof getLastNCommits>>[number];
export type ActiveRepo = Awaited<ReturnType<typeof getMostActiveRepositories>>[number];

export interface GithubResponse {
    recent_commits: RecentCommit[],
    active_repos: ActiveRepo[]
}