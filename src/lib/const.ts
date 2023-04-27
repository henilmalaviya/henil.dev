import getGithubUrlFromRepo from "@/lib/utils/getGithubUrlFromRepo";
import getNpmUrlFromPackage from "@/lib/utils/getNpmUrlFromPackage";

export const GITHUB_USERNAME = "henil0604";
export const GITHUB = `https://github.com/${GITHUB_USERNAME}`;
export const TWITTER_USERNAME = "realhenil";
export const TWITTER = `https://twitter.com/${TWITTER_USERNAME}`;
export const YOUTUBE_USERNAME = "henil0604";
export const YOUTUBE = `https://www.youtube.com/@${YOUTUBE_USERNAME}`;
export const EMAIL = "me@henil.xyz"

export const PROJECTS = [
    {
        type: 'website',
        name: 'ChatPat',
        description: "A Room based chat system with full transparancy & Security.",
        url: "https://chatpat.henil.xyz",
        urls: {
            github: getGithubUrlFromRepo('chatpat')
        },
        tech: [
            'vscode-icons:file-type-svelte',
            'vscode-icons:file-type-typescript-official',
            'devicon:vercel-wordmark',
            'skill-icons:mongodb'
        ]
    },
    {
        type: 'github',
        name: 'filic',
        urls: {
            npm: getNpmUrlFromPackage('filic')
        },
        tech: [
            'vscode-icons:file-type-typescript-official',
        ]
    },
    {
        type: 'github',
        name: 'nabladb',
        urls: {
            npm: getNpmUrlFromPackage('nabladb')
        },
        tech: [
            'vscode-icons:file-type-typescript-official',
        ]
    },
    {
        type: 'website',
        name: 'Go',
        description: "Fully Encrypted Link Shortner",
        url: 'https://go.henil.xyz',
        urls: {
            github: getGithubUrlFromRepo('go.henil.xyz')
        },
        tech: [
            'vscode-icons:file-type-typescript-official',
            'logos:nextjs-icon',
            'skill-icons:supabase-dark'
        ]
    }
]