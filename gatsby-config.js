module.exports = {
  siteMetadata: {
    title: `Hyeseong's Blog`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    // Add typescript stack into webpack
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
