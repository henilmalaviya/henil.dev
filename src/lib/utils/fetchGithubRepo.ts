import { GITHUB_USERNAME } from "../const";

export default async function fetchGithubRepo(repo: string) {
    try {
        const response = await fetch(
            `https://api.github.com/repos/${GITHUB_USERNAME}/${repo}`
        );

        if (response.status !== 200) {
            return null;
        }

        const data = await response.json();
        return data;
    } catch {
        return null;
    }
}