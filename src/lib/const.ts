import getGithubUrlFromRepo from "@/lib/utils/getGithubUrlFromRepo";
import getNpmUrlFromPackage from "@/lib/utils/getNpmUrlFromPackage";

export const GITHUB_USERNAME = "henil0604";
export const GITHUB = `https://github.com/${GITHUB_USERNAME}`;
export const TWITTER_USERNAME = "realhenil";
export const TWITTER = `https://twitter.com/${TWITTER_USERNAME}`;
export const YOUTUBE_USERNAME = "henil0604";
export const YOUTUBE = `https://www.youtube.com/@${YOUTUBE_USERNAME}`;
export const EMAIL = "me@henil.xyz"

export const ICONS = {
    EMAIL: 'mdi:email',
    TWITTER: "mdi:twitter",
    GITHUB: 'mdi:github',
    YOUTUBE: "mdi:youtube",
    SVELTE: 'vscode-icons:file-type-svelte',
    TYPESCRIPT: 'vscode-icons:file-type-typescript-official',
    VERCEL: 'devicon:vercel-wordmark',
    MONGODB: 'skill-icons:mongodb',
    NEXTJS: 'logos:nextjs-icon',
    SUPABASE: 'skill-icons:supabase-dark',
    JAVASCRIPT: 'devicon:javascript',
    CSS: 'logos:css-3',
    HTML: 'logos:html-5',
    SCSS: 'vscode-icons:file-type-scss2',
    REACT: 'skill-icons:react-dark',
    VUE: 'vscode-icons:file-type-vue',
    NUXT: 'logos:nuxt-icon',
    NESTJS: 'vscode-icons:file-type-nestjs',
    MYSQL: 'logos:mysql',
    PHP: 'logos:php',
    VITE: 'vscode-icons:file-type-vite',
    DOCKER: 'logos:docker-icon',
    LINUX: 'logos:linux-tux',
    KALI_LINUX: 'simple-icons:kalilinux'
}

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
            ICONS.SVELTE,
            ICONS.TYPESCRIPT,
            ICONS.VERCEL,
            ICONS.MONGODB
        ]
    },
    {
        type: 'github',
        name: 'filic',
        urls: {
            npm: getNpmUrlFromPackage('filic')
        },
        tech: [
            ICONS.TYPESCRIPT,
        ]
    },
    {
        type: 'github',
        name: 'nabladb',
        urls: {
            npm: getNpmUrlFromPackage('nabladb')
        },
        tech: [
            ICONS.TYPESCRIPT,
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
            ICONS.TYPESCRIPT,
            ICONS.NEXTJS,
            ICONS.SUPABASE,
            ICONS.VERCEL,
        ]
    }
]