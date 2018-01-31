const siteUrl = 'https://blog.cometkim.kr'

module.exports = {
    siteMetadata: {
        siteUrl
    },
    plugins: [
        `gatsby-plugin-sass`,
        `gatsby-plugin-react-helmet`,
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
        `gatsby-transformer-remark`
    ]
};
