const siteUrl = 'https://blog.cometkim.kr'

module.exports = {
    siteMetadata: {
        siteUrl
    },
    plugins: [
        `gatsby-plugin-sass`,
        `gatsby-plugin-react-next`,
        `gatsby-plugin-react-helmet`,
        'gatsby-plugin-resolve-src',
        `gatsby-plugin-typescript`,
        `gatsby-plugin-styled-components`,
        {
            resolve: `gatsby-plugin-canonical-urls`,
            options: {
                siteUrl
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/blog-posts/posts`,
                name: `blog-posts`
            }
        },
        {
            resolve: 'gatsby-transformer-remark',
            options: {
                plugins: [
                    'gatsby-remark-copy-linked-files',
                    'gatsby-remark-prismjs',
                ]
            }
        }
    ]
};
