const { createFilePath } = require('gatsby-source-filesystem')

exports.onPostBuild = () => {}

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

        const path = slug.split('/')
        if (path.length > 3) {
            boundActionCreators.createNodeField({
                node,
                name: 'series',
                value: path[2],
            })
        }
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