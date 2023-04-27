import { GITHUB } from "@/lib/const";

export default function getGithubUrlFromRepo(repo: string) {
    return `${GITHUB}/${repo}`;
}