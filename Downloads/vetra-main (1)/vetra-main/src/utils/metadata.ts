import { Metadata } from "next";

interface MetadataProps {
    title?: string;
    description?: string;
    icons?: Metadata["icons"];
    noIndex?: boolean;
    keywords?: string[];
    author?: string;
    twitterHandle?: string;
    type?: "website" | "article" | "profile";
    locale?: string;
    alternates?: Record<string, string>;
    publishedTime?: string;
    modifiedTime?: string;
}

export const generateMetadata = ({
    title = `AURION - Replace 10+ Tools, Save 20+ Hours/Week | AI Platform`,
    description = `Stop switching between 10+ tools. AURION is the only AI platform where you build everything: professional websites, mobile apps, AI content (text/images/videos), intelligent agents, and custom code. Join 10,000+ creators saving 20+ hours weekly. Replace $200-500/month in subscriptions with one powerful platform.`,
    icons = [
        {
            rel: "icon",
            url: "/icons/icon-dark.png",
            media: "(prefers-color-scheme: light)",
        },
        {
            rel: "icon",
            url: "/icons/icon.png",
            media: "(prefers-color-scheme: dark)",
        },
    ],
    noIndex = false,
    keywords = [
        "AI website builder",
        "AI app creator",
        "all-in-one AI platform",
        "replace multiple tools",
        "save time building",
        "AI content generation",
        "AI code editor",
        "AI agents automation",
        "no-code AI builder",
        "AI development platform",
        "build business faster",
        "consolidate tools",
        "AI website creator",
        "AI app development",
        "AI content studio",
        "professional website builder",
        "mobile app creator AI",
        "AI video generator",
        "AI image generator",
        "business automation platform",
        "time-saving AI tools",
        "all-in-one business platform",
        "AI-powered development",
        "replace webflow",
        "replace figma",
        "replace canva",
        "AI platform 2025"
    ],
    author = process.env.NEXT_PUBLIC_AUTHOR_NAME,
    type = "website",
}: MetadataProps = {}): Metadata => {
    const metadataBase = new URL(process.env.NEXT_PUBLIC_APP_URL || "https://vertra-ai.vercel.app");

    return {
        metadataBase,
        title: {
            template: `%s | ${process.env.NEXT_PUBLIC_APP_NAME}`,
            default: title
        },
        description,
        keywords,
        authors: [{ name: author }],
        creator: author,
        publisher: process.env.NEXT_PUBLIC_APP_NAME,
        formatDetection: {
            email: false,
            address: false,
            telephone: false,
        },
        icons,
    };
};