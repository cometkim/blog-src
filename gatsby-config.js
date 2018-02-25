const siteUrl = 'https://blog.cometkim.kr'

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
        title: `Hyeseong's Blog`,
        description: '엔지니어링 관련 있거나 없거나, 잡생각을 모아 지식으로 정리하는 블로그',
        keywords: ['dev', 'blog', 'web'],
    },
    plugins: [
        'gatsby-plugin-react-next',
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-resolve-src',
        'gatsby-plugin-typescript',
        'gatsby-plugin-styled-components',
        'gatsby-plugin-sitemap',
        {
            resolve: 'gatsby-plugin-canonical-urls',
            options: {
                siteUrl,
            },
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
                    'gatsby-plugin-sharp',
                    {
                        resolve: 'gatsby-remark-images',
                        options: {
                            maxWidth: 590,
                        },
                    },
                    'gatsby-remark-copy-linked-files',
                    'gatsby-remark-prismjs',
                    'gatsby-remark-autolink-headers',
                ]
            }
        }
    ]
}
