export type SiteConfig = {
    name: string
    description: string
    url: string
    ogImage: string
    links: {
        twitter: string
        github: string
    }
}

export const siteConfig: SiteConfig = {
    name: "IndieSpace",
    description:
        "Focus on your business, not boilerplate code.",
    url: "",
    ogImage: "",
    links: {
        twitter: "https://twitter.com/indiespace_",
        github: "https://github.com/salmandotweb",
    },
}