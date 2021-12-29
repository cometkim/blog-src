const siteUrl = 'https://blog.cometkim.kr'
const title = `Hyeseong's Blog`
const description = '엔지니어링 관련 있거나 없거나, 잡생각을 모아 지식으로 정리하는 블로그'
const keywords = ['dev', 'blog', 'web']
const owner = {
    name: 'Hyeseong Kim',
    email: 'cometkim.kr@gmail.com',
    github: 'cometkim',
    twitter: 'KrComet',
    gravatar: 'f8926983e9d37ea2f6ffba6575fad143',
}

module.exports = {
    siteMetadata: {
        siteUrl,
        owner,
        title,
        description,
        keywords,
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-resolve-src',
        'gatsby-plugin-typescript',
        'gatsby-plugin-styled-components',
        'gatsby-plugin-sitemap',
        'gatsby-plugin-feed',
        'gatsby-plugin-offline',
        'gatsby-plugin-netlify',
        'gatsby-plugin-sharp',
        'gatsby-plugin-twitter',
        {
            resolve: 'gatsby-plugin-canonical-urls',
            options: {
                siteUrl,
            },
        },
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                name: title,
                short_name: title,
                description,
                icons: [],
                start_url: '/',
                display: 'minimal-ui',
            },
        },
        {
            resolve: 'gatsby-plugin-google-analytics',
            options: {
                trackingId: 'UA-71008614-1',
                head: true,
            }
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                path: `${__dirname}/blog-posts/posts`,
                name: 'blog-posts',
            },
        },
        {
            resolve: 'gatsby-transformer-remark',
            options: {
                plugins: [
                    {
                        resolve: 'gatsby-remark-images',
                        options: {
                            maxWidth: 590,
                        },
                    },
                    {
                        resolve: 'gatsby-remark-emojis',
                        options: {
                            active: true,
                            class: 'emoji-icon',
                            size: 24,
                        },
                    },
                    'gatsby-remark-copy-linked-files',
                    'gatsby-remark-prismjs',
                    'gatsby-remark-autolink-headers',
                    'gatsby-remark-embed-youtube',
                    'gatsby-remark-responsive-iframe',
                    'gatsby-remark-external-links',
                    'gatsby-remark-katex',
                ],
            },
        },
    ],
}
