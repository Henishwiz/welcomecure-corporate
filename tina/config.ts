import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
    process.env.GITHUB_BRANCH ||
    process.env.VERCEL_GIT_COMMIT_REF ||
    process.env.HEAD ||
    "henish_dev";

export default defineConfig({
    branch: "henish_dev",

    // Get this from tina.io
    clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
    // Get this from tina.io
    token: process.env.TINA_TOKEN,

    build: {
        outputFolder: "admin",
        publicFolder: "public",
    },
    media: {
        tina: {
            mediaRoot: "",
            publicFolder: "public",
        },
    },
    schema: {
        collections: [
            {
                name: "header",
                label: "Header",
                path: "content/components/Header",
                format: "md",
                match: { include: "header" },
                fields: [
                    { type: "image", name: "logo", label: "Logo Image" },
                    {
                        type: "object",
                        name: "menuItems",
                        label: "Menu Items",
                        list: true,
                        fields: [
                            { type: "string", name: "label", label: "Menu Label" },
                            { type: "string", name: "url", label: "URL", required: false },
                            {
                                type: "object",
                                name: "subItems",
                                label: "Dropdown Items",
                                list: true,
                                fields: [
                                    { type: "string", name: "label", label: "Submenu Label" },
                                    { type: "string", name: "url", label: "Submenu URL" },
                                ],
                            },
                        ],
                    },
                    { type: "string", name: "loginText", label: "Login Button Text" },
                    { type: "string", name: "registerText", label: "Register Button Text" },
                    {
                        type: "object",
                        name: "contactInfo",
                        label: "Contact Info",
                        list: true,
                        fields: [
                            { type: "string", name: "label", label: "Label" },
                            { type: "string", name: "url", label: "URL" },
                            { type: "image", name: "desktopIcon", label: "Desktop Icon" },
                            { type: "image", name: "mobileIcon", label: "Mobile Icon" },
                            { type: "image", name: "flag", label: "Flag (optional)" },
                        ],
                    },
                ],
            },
            {
                name: "hero",
                label: "Hero Section",
                path: "content/pages/Home",
                format: "md",
                match: {
                    include: "hero",
                },
                fields: [
                    { type: "string", name: "title", label: "Title" },
                    { type: "string", name: "subtitle", label: "Subtitle" },
                    { type: "image", name: "backgroundImage", label: "Background Image" },
                    { type: "image", name: "backgroundImageForMobile", label: "Background Image For Mobile" },
                    { type: "string", name: "primaryCta", label: "Primary Button Text" },
                    { type: "string", name: "primaryCtaUrl", label: "Primary Button URL" },
                    { type: "string", name: "secondaryCta", label: "Secondary Button Text" },
                    { type: "string", name: "secondaryCtaUrl", label: "Secondary Button URL" },
                ],
            },
            {
                name: "organizations",
                label: "Organizations",
                path: "content/pages/Home",
                format: "md",
                match: {
                    include: "organizations",
                },
                fields: [
                    { type: "string", name: "title", label: "Section Title" },
                    {
                        type: "object",
                        name: "logos",
                        label: "Organization Logos",
                        list: true,
                        fields: [{ type: "image", name: "src", label: "Logo Image" }],
                    },
                ],
            },
            {
                name: "ourSolutions",
                label: "Our Solutions",
                path: "content/pages/Home",
                format: "md",
                match: { include: "our-solutions" },
                fields: [
                    {
                        type: "string",
                        name: "title",
                        label: "Section Title",
                    },
                    {
                        type: "object",
                        name: "leftSolutions",
                        label: "Left Grid Solutions",
                        list: true,
                        fields: [
                            { type: "string", name: "title", label: "Solution Title" },
                            { type: "image", name: "backgroundImage", label: "Background Image" },
                            {
                                type: "boolean",
                                name: "highlight",
                                label: "Yellow Highlight Box?",
                            },
                        ],
                    },
                    {
                        type: "image",
                        name: "rightImage",
                        label: "Big Right Image",
                    },
                    {
                        type: "object",
                        name: "solutionsList",
                        label: "Small Solutions List",
                        list: true,
                        fields: [{ type: "string", name: "label", label: "Solution Label" }],
                    },
                    {
                        type: "string",
                        name: "ctaText",
                        label: "CTA Button Text",
                    },
                ],
            },
            {
                name: "trustedBy",
                label: "Trusted By",
                path: "content/pages/Home",
                format: "md",
                match: { include: "trusted-by" },
                fields: [
                    { type: "string", name: "title", label: "Main Title" },
                    {
                        type: "object",
                        name: "stats",
                        label: "Stats",
                        list: true,
                        fields: [
                            { type: "string", name: "title", label: "Stat Title" },
                            { type: "string", name: "subtitle", label: "Stat Subtitle" },
                        ],
                    },
                    {
                        type: "object",
                        name: "reviews",
                        label: "Customer Reviews",
                        list: true,
                        fields: [
                            { type: "string", name: "review", label: "Review Text" },
                            { type: "string", name: "name", label: "Reviewer Name" },
                            { type: "string", name: "position", label: "Reviewer Position" },
                        ],
                    },
                ],
            },
            {
                name: "highQualitySolutions",
                label: "High Quality Solutions",
                path: "content/pages/Home",
                format: "md",
                match: { include: "high-quality-solutions" },
                fields: [
                    {
                        type: "string",
                        name: "title",
                        label: "Section Title",
                    },
                    {
                        type: "object",
                        name: "solutions",
                        label: "Solutions",
                        list: true,
                        fields: [
                            { type: "image", name: "image", label: "Image" },
                            { type: "string", name: "title", label: "Solution Title" },
                            { type: "string", name: "subtitle", label: "Solution Subtitle" },
                        ],
                    },
                ],
            },
            {
                name: "whyWelcomecure",
                label: "Why Welcomecure",
                path: "content/pages/Home",
                format: "md",
                match: { include: "why-welcomecure" },
                fields: [
                    { type: "string", name: "title", label: "Main Title" },
                    { type: "string", name: "subtitle", label: "Subtitle" },
                    { type: "image", name: "image", label: "Main Image" },
                    { type: "string", name: "ctaText", label: "CTA Button Text" },
                    {
                        type: "object",
                        name: "features",
                        label: "Features List",
                        list: true,
                        fields: [
                            { type: "image", name: "icon", label: "Icon" },
                            { type: "string", name: "text", label: "Feature Text" },
                        ],
                    },
                ],
            },
            {
                name: "caseStudies",
                label: "Case Studies",
                path: "content/pages/Home",
                format: "md",
                match: { include: "case-studies" },
                fields: [
                    {
                        type: "string",
                        name: "title",
                        label: "Main Title",
                    },
                    {
                        type: "string",
                        name: "subtitle",
                        label: "Subtitle",
                    },
                    {
                        type: "object",
                        name: "items",
                        label: "Case Studies",
                        list: true,
                        fields: [
                            { type: "image", name: "image", label: "Image" },
                            { type: "string", name: "title", label: "Title" },
                            { type: "string", name: "description", label: "Description" },
                            { type: "string", name: "publishDate", label: "Publish Date" },
                            { type: "string", name: "publishBy", label: "Published By" },
                        ],
                    },
                ],
            },
            {
                name: "footer",
                label: "Footer",
                path: "content/components/Footer",
                format: "md",
                match: { include: "footer" },
                fields: [
                    {
                        type: "string",
                        name: "heading",
                        label: "Newsletter Heading"
                    },
                    {
                        type: "string",
                        name: "subheading",
                        label: "Newsletter Subheading"
                    },
                    {
                        type: "object",
                        name: "socialLinks",
                        label: "Social Links",
                        list: true,
                        fields: [{ type: "image", name: "icon", label: "Social Icon" }, { type: "string", name: "url", label: "Social URL" }]
                    },
                    {
                        type: "string",
                        name: "emailPlaceholder",
                        label: "Newsletter Email Placeholder"
                    },
                    {
                        type: "string",
                        name: "newsletterButtonText",
                        label: "Newsletter Button Text"
                    },
                    {
                        type: "object",
                        name: "contactInfo",
                        label: "Contact Info",
                        fields: [
                            { type: "string", name: "email", label: "Email" },
                            { type: "string", name: "phone", label: "Phone" }
                        ]
                    },
                    {
                        type: "object",
                        name: "footerLinks",
                        label: "Footer Link Sections",
                        list: true,
                        fields: [
                            { type: "string", name: "title", label: "Section Title" },
                            {
                                type: "object",
                                name: "links",
                                label: "Links",
                                list: true,
                                fields: [
                                    { type: "string", name: "label", label: "Link Label" },
                                    { type: "string", name: "url", label: "Link URL" }
                                ]
                            }
                        ]
                    },
                    {
                        type: "object",
                        name: "paymentMethods",
                        label: "Payment Methods",
                        list: true,
                        fields: [{ type: "image", name: "icon", label: "Payment Icon" }]
                    },
                    {
                        type: "string",
                        name: "copyright",
                        label: "Copyright Text"
                    },
                    {
                        type: "object",
                        name: "legalLinks",
                        label: "Legal Links",
                        list: true,
                        fields: [
                            { type: "string", name: "label", label: "Link Label" },
                            { type: "string", name: "url", label: "Link URL" }
                        ]
                    }
                ]
            },
            {
                name: "seo",
                label: "SEO",
                path: "content/seo",
                format: "md",
                fields: [
                    { type: "string", name: "title", label: "Meta Title" },
                    { type: "string", name: "description", label: "Meta Description" },
                    {
                        type: "object",
                        name: "openGraph",
                        label: "Open Graph",
                        fields: [
                            { type: "string", name: "ogTitle", label: "OG Title" },
                            { type: "string", name: "ogDescription", label: "OG Description" },
                            { type: "image", name: "ogImage", label: "OG Image" },
                        ],
                    },
                    {
                        type: "object",
                        name: "twitter",
                        label: "Twitter Card",
                        fields: [
                            { type: "string", name: "twitterTitle", label: "Twitter Title" },
                            { type: "string", name: "twitterDescription", label: "Twitter Description" },
                            { type: "image", name: "twitterImage", label: "Twitter Image" },
                        ],
                    },
                ],
            }
        ],
    },
});
