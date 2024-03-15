import { json, type RequestHandler } from "@sveltejs/kit";
import type { GithubResponse } from './type';
import { getLastNCommits, getMostActiveRepositories } from "./util";

export const GET = (async (event) => {

    const { } = event;

    const recentCommits = await getLastNCommits(3);

    const activeRepos = await getMostActiveRepositories(3)

    const data: GithubResponse = {
        recent_commits: recentCommits,
        active_repos: activeRepos
    }

    return json(data, {
        headers: {
            'cache-control': 'max-age=1000' // 1 minute cache
        }
    });
}) satisfies RequestHandler