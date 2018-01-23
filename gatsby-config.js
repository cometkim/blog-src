module.exports = {
  siteMetadata: {
    title: `Hyeseong's Blog`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/blog-posts/posts`,
        name: `blog-posts`
      }
    },
    `gatsby-transformer-remark`
  ],
}
