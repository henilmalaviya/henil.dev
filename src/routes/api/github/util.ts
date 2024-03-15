import { Octokit } from 'octokit'
import { GH_TOKEN, GH_USERNAME } from "$env/static/private";

const octokit = new Octokit({ auth: GH_TOKEN })

export async function getLastNCommits(n: number = 5) {
    const lastThreeCommitsResponse = (await octokit.rest.search.commits({
        q: `author:${GH_USERNAME}`,
        sort: 'author-date',
        order: 'desc',
        per_page: n
    })).data

    if (lastThreeCommitsResponse.incomplete_results) {
        return [];
    }

    return lastThreeCommitsResponse.items.map(commit => {
        return {
            api_url: commit.url,
            html_url: commit.html_url,
            sha: commit.sha,
            repository: {
                id: commit.repository.id,
                name: commit.repository.name,
                full_name: commit.repository.full_name,
                html_url: commit.repository.html_url,
                owner: {
                    login: commit.repository.owner.login
                },
            },
            timestamp: commit.commit.committer?.date,
            commit_message: commit.commit.message,
        }
    });
}

export async function getRepoLanguage(owner: string, repo: string) {
    const languageResponse = await octokit.rest.repos.listLanguages({
        owner,
        repo,
    })
    return languageResponse.data;
}

export async function getMostActiveRepositories(m: number = 5) {
    const repositoriesResponse = await octokit.rest.repos.listForUser({
        username: GH_USERNAME,
        per_page: m,
        sort: 'pushed',
        direction: 'desc',
    });

    return Promise.all(repositoriesResponse.data.map(async repo => ({
        id: repo.id,
        name: repo.name,
        full_name: repo.full_name,
        description: repo.description,
        is_fork: repo.fork,
        html_url: repo.html_url,
        api_url: repo.url,
        is_public: !repo.private,
        star_count: repo.stargazers_count,
        languages: await getRepoLanguage(repo.owner.login, repo.name)
    })));
}