export const NAME = "Henil Malaviya"

export const GITHUB_USERNAME = "henil0604";
export const GITHUB = `https://github.com/${GITHUB_USERNAME}`;
export const TWITTER_USERNAME = "henilmalaviya";
export const TWITTER = `https://twitter.com/${TWITTER_USERNAME}`;
export const YOUTUBE_USERNAME = "henil0604";
export const YOUTUBE = `https://www.youtube.com/@${YOUTUBE_USERNAME}`;
export const EMAIL = "me@henil.xyz"
export const LINKEDIN_USERNAME = "henil-malaviya";
export const LINKEDIN = `https://www.linkedin.com/in/${LINKEDIN_USERNAME}`

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
    KALI_LINUX: 'simple-icons:kalilinux',
    MOON: 'radix-icons:moon',
    SUN: 'ph:sun',
    NPM: 'mdi:npm',
    LINKEDIN: 'mdi:linkedin'
}

export const PROJECTS = [
    {
        name: 'filic',
        description: 'Wrapper around Node FS',
        links: [
            {
                href: 'https://www.npmjs.com/package/filic',
                icon: ICONS.NPM
            },
            {
                href: `${GITHUB}/filic`,
                icon: ICONS.GITHUB
            }
        ],
        tech: [
            ICONS.TYPESCRIPT
        ]
    },
    {
        name: 'NablaDb',
        description: 'Quick Database for NodeJs',
        links: [
            {
                href: 'https://www.npmjs.com/package/nabladb',
                icon: ICONS.NPM
            },
            {
                href: `${GITHUB}/nabladb`,
                icon: ICONS.GITHUB
            },
        ],
        tech: [
            ICONS.TYPESCRIPT
        ]
    }
]

export const LINKS = [
    {
        name: `${EMAIL}`,
        icon: ICONS.EMAIL,
        href: `mailto:${EMAIL}`,
        class: 'bg-red-500 text-white'
    },
    {
        name: `@${GITHUB_USERNAME}`,
        icon: ICONS.GITHUB,
        href: GITHUB,
        class: "bg-black text-white"
    },
    {
        name: `@${TWITTER_USERNAME}`,
        icon: ICONS.TWITTER,
        href: TWITTER,
        class: "bg-blue-600 text-white"
    },
    {
        name: `@${YOUTUBE_USERNAME}`,
        icon: ICONS.YOUTUBE,
        href: YOUTUBE,
        class: "bg-red-700 text-white"
    },
    {
        name: `@${LINKEDIN_USERNAME}`,
        icon: ICONS.LINKEDIN,
        href: LINKEDIN,
        class: "bg-blue-900 text-white"
    },
]