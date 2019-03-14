const { createFieldUtil } = require('./bootstrap/filed-util')
const { createPageUtil } = require('./bootstrap/page-util')
const redirects = require('./bootstrap/redirects')

// Does nothing but for hinting syntax highlight of inline GraphQL query
const graphql = lit => lit[0]

// Create redirections
exports.onPostBootstrap = ({
    actions: { createRedirect },
}) => {
    redirects.forEach(redirect => createRedirect(redirect))
}

// Create custom fields on nodes
// - Slug (equals with path of URL)
// - Series (Split the slug by `/`, then equals with the first part if it have a couple, otherwise null)
exports.onCreateNode = ({
    actions: { createNodeField },
    ...context
}) => {
    const util = createFieldUtil(context)

    if (context.node.internal.type === 'MarkdownRemark') {
        const prefix = '/posts'
        const slug = prefix + util.buildSlug()
        console.log(`\n- Gen Slug: ${slug}`)
        createNodeField({
            node: context.node,
            name: 'slug',
            value: slug,
        })
        
        const series = util.buildSeries(slug)
        console.log(`-> Series ${series}`)
        createNodeField({
            node: context.node,
            name: 'series',
            value: series,
        })
    }
}

// Create contentful pages
// - Post pages (`/posts/{slug}`)
// - Series pages (`/series/{series}`)
// - Tag pages (`/tag/{tag}`)
exports.createPages = async (context) => {
    const util = createPageUtil(context)

    const postPageCreator = util.createPageCreator({
        query: graphql`{
            posts: allMarkdownRemark {
                edges {
                    node {
                        fields {
                            slug
                        }
                    }
                }
            }
        }`,
        mapDataToProps: data => (
            data.posts.edges
            .map(edge => edge.node)
            .map(node => node.fields.slug)
            .map(slug => ({
                path: slug,
                component: `${__dirname}/src/templates/post.tsx`,
                context: { slug },
            }))
        ),
    })

    const seriesPageCreator = util.createPageCreator({
        query: graphql`{
            posts: allMarkdownRemark(
                filter: {
                    fields: {
                        series: { ne: null }
                    }
                }
            ) {
                groups: group(field: fields___series){
                    series: fieldValue
                }
            }
        }`,
        mapDataToProps: data => (
            data.posts.groups
            .map(group => group.series)
            .map(series => ({
                path: `/series/${series}`,
                component: `${__dirname}/src/templates/series.tsx`,
                context: { series },
            })
        )),
    })

    const tagPageCreator = util.createPageCreator({
        query: graphql`{
            posts: allMarkdownRemark(
                filter: {
                    frontmatter: {
                        tags: { ne: null }
                    }
                }
            ) {
                groups: group(field: frontmatter___tags) {
                    tag: fieldValue
                }
            }
        }`,
        mapDataToProps: data => (
            data.posts.groups
            .map(group => group.tag)
            .map(tag => ({
                path: `/tags/${tag}`,
                component: `${__dirname}/src/templates/tag.tsx`,
                context: { tag },
            }))
        ),
    })

    await Promise.all([
        postPageCreator(),
        seriesPageCreator(),
        tagPageCreator(),
    ])
}
