const YAML = require('yaml')
const fs = require('fs')
const path = require('path')
const siteMetadata = YAML.parse(fs.readFileSync(path.resolve(__dirname, 'site-metadata.yml'), 'utf-8'))
const { siteUrl, title, description } = siteMetadata

module.exports = {
    siteMetadata,
    plugins: [
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-resolve-src',
        'gatsby-plugin-typescript',
        'gatsby-plugin-styled-components',
        'gatsby-plugin-sitemap',
        'gatsby-plugin-feed',
        'gatsby-plugin-offline',
        'gatsby-plugin-netlify',
        'gatsby-plugin-netlify-cache',
        'gatsby-plugin-sharp',
        'gatsby-plugin-twitter',
        'gatsby-plugin-catch-links',
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
                start_url: '/',
                display: 'standalone',
                // 아이콘 어케 만듬...?
                // icon: 'src/images/icon.png',
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
                            linkImagesToOriginal: false,
                            showCaptions: true,
                            tracedSVG: {
                                color: '#EEE',
                                turnPolicy: 'TURNPOLICY_MAJORITY',
                            },
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
                    {
                        resolve: 'gatsby-remark-images-zoom',
                        options: {
                            zIndex: 0,
                        },
                    },
                    'gatsby-remark-autolink-headers',
                    'gatsby-remark-copy-linked-files',
                    'gatsby-remark-code-titles',
                    'gatsby-remark-embed-video',
                    'gatsby-remark-external-links',
                    'gatsby-remark-katex',
                    'gatsby-remark-prismjs',
                    'gatsby-remark-responsive-iframe',
                ],
            },
        },
    ],
}
