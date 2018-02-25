const { writeFileSync } = require('fs')
const { createFilePath } = require('gatsby-source-filesystem')

exports.onPostBuild = () => {
    const googleSiteVerification = 'google0a78cbeb5b51994f.html'
    writeFileSync(`${__dirname}/public/${googleSiteVerification}`, `google-site-verification: ${googleSiteVerification}`)
    console.log(`\n- Gen ${googleSiteVerification}`)

    const naverSiteVerification = 'naverf2f3d3e3011939641972951b6a0b58da.html'
    writeFileSync(`${__dirname}/public/${naverSiteVerification}`, `naver-site-verification: ${naverSiteVerification}`)
    console.log(`\n- Gen ${naverSiteVerification}`)
}

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
    if (node.internal.type === 'MarkdownRemark') {
        const slug = '/posts' + createFilePath({
            node,
            getNode,
            basePath: 'blog-posts/posts',
            trailingSlash: false,
        })
        console.log(`\n- Gen Slug: ${slug}`)

        boundActionCreators.createNodeField({
            node,
            name: 'slug',
            value: slug,
        })
    }
}

exports.createPages = async ({ boundActionCreators, graphql }) => {
    const query = `{
        posts: allMarkdownRemark {
            edges {
                node {
                    fields {
                        slug
                    }
                }
            }
        }
    }`
    const { data, errors } = await graphql(query);

    if (errors) {
        throw new Error(errors);
    }

    data.posts.edges
        .map(e => e.node)
        .map(n => n.fields.slug)
        .map(slug => ({
            path: slug,
            component: `${__dirname}/src/templates/post.tsx`,
            context: { slug },
        }))
        .forEach(ctx => boundActionCreators.createPage(ctx))
}