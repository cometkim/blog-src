const YAML = require('yaml');
const { readFileSync } = require('fs');
const { resolve } = require('path');

const siteMetadata = YAML.parse(readFileSync(resolve('site-metadata.yml'), 'utf-8'));
const { siteUrl, title, description, ga } = siteMetadata;

module.exports = {
  siteMetadata,
  plugins: [
    'gatsby-plugin-catch-links',
    'gatsby-plugin-emotion',
    'gatsby-plugin-feed',
    'gatsby-plugin-netlify',
    'gatsby-plugin-netlify-cache',
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-twitter',
    'gatsby-plugin-typescript',
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl,
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: ga.trackingId,
        head: true,
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
      resolve: 'gatsby-plugin-module-resolver',
      options: {
        root: './',
        aliases: {
          '~': '.',
        },
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
          'gatsby-remark-autolink-headers',
          'gatsby-remark-code-titles',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-draw',
          'gatsby-remark-embedder',
          'gatsby-remark-external-links',
          // 'gatsby-remark-gemoji-to-image',
          'gatsby-remark-images-medium-zoom',
          'gatsby-remark-katex',
          'gatsby-remark-responsive-iframe',
          'gatsby-remark-vscode',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 590,
              linkImagesToOriginal: false,
              showCaptions: true,
              // withWebp: true,
              tracedSVG: {
                color: '#EEE',
                turnPolicy: 'TURNPOLICY_MAJORITY',
              },
            },
          },
        ],
      },
    },
  ],
};
