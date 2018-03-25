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
    const postQuery = `{
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
    const postData = await graphql(postQuery);
    if (postData.errors) {
        throw new Error(errors);
    }
    postData.data.posts.edges
        .map(e => e.node)
        .map(n => n.fields.slug)
        .map(slug => ({
            path: slug,
            component: `${__dirname}/src/templates/post.tsx`,
            context: { slug },
        }))
        .forEach(ctx => boundActionCreators.createPage(ctx))

    const seriesQuery = `{
        posts: allMarkdownRemark(
            filter: { fields: { series: { ne: null } } }
        ){
            group(field: fields___series){
                series: fieldValue
            }
        }
    }`
    const seriesData = await graphql(seriesQuery)
    if (seriesData.errors) {
        throw new Error(errors)
    }
    seriesData.data.posts.group
        .map(group => group.series)
        .map(series => ({
            path: `/series/${series}`,
            component: `${__dirname}/src/templates/series.tsx`,
            context: { series },
        }))
        .forEach(ctx => boundActionCreators.createPage(ctx))

    const tagsQuery = `{
        posts: allMarkdownRemark(
            filter: { frontmatter: { tags: { ne: null } } }
        ) {
            group(field: frontmatter___tags) {
                tag: fieldValue
            }
        }
    }
    `
    const tagsData = await graphql(tagsQuery)
    if (tagsData.errors) {
        throw new Error(tagsData.errors)
    }
    tagsData.data.posts.group
        .map(group => group.tag)
        .map(tag => ({
            path: `/tags/${tag}`,
            component: `${__dirname}/src/templates/tag.tsx`,
            context: { tag },
        }))
        .forEach(ctx => boundActionCreators.createPage(ctx))
}