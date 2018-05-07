const { createFilePath } = require('gatsby-source-filesystem')

const redirects = [
    {
        fromPath: '/posts/what-i-leared-from-contribution-and-rfc-1341/',
        toPath: '/posts/what-i-learned-from-contribution-and-rfc-1341/',
        isPermanent: true,
    },
]

const creators = [
    {
        query: `{
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
        creator: ({ data, createPage }) => {
            data.posts.edges
            .map(e => e.node)
            .map(n => n.fields.slug)
            .forEach(slug => createPage({
                path: slug,
                component: `${__dirname}/src/templates/post.tsx`,
                context: { slug },
            }))
        },
    },
    {
        query: `{
            posts: allMarkdownRemark(
                filter: { fields: { series: { ne: null } } }
            ){
                group(field: fields___series){
                    series: fieldValue
                }
            }
        }`,
        creator: ({ data, createPage }) => {
            data.posts.group
            .map(g => g.series)
            .forEach(series => createPage({
                path: `/series/${series}`,
                component: `${__dirname}/src/templates/series.tsx`,
                context: { series },
            }))
        },
    },
    {
        query: `{
            posts: allMarkdownRemark(
                filter: { frontmatter: { tags: { ne: null } } }
            ) {
                group(field: frontmatter___tags) {
                    tag: fieldValue
                }
            }
        }`,
        creator: ({ data, createPage }) => {
            data.posts.group
            .map(g => g.tag)
            .forEach(tag => createPage({
                path: `/tags/${tag}`,
                component: `${__dirname}/src/templates/tag.tsx`,
                context: { tag },
            }))
        },
    },
]

function buildSlug({ 
    context: {
        node,
        getNode,
    },
    createFilePath,
}) {
    const basePath = 'blog-posts/posts'
    const categorySlug = '/posts'
    const postSlug = createFilePath({
        node,
        getNode,
        basePath,
    })

    return { 
        slug: categorySlug + postSlug,
        postSlug,
    }
}

function buildSeries({ postSlug }) {
    const trimSlash = slug => slug.slice(
        1, // the slug is always began with `/`
        slug.endsWith('/') ? -1 : 0,
    )
    const [series, name] = trimSlash(postSlug).split('/')

    return {
        series: name ? series : null 
    }
}

exports._node = {
    redirects,
    creators,
    buildSlug,
    buildSeries,
}

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
    if (node.internal.type === 'MarkdownRemark') {
        const { slug, postSlug } = buildSlug({ context: { node, getNode }, createFilePath })
        console.log(`\n- Gen Slug: ${slug}`)
        boundActionCreators.createNodeField({
            node,
            name: 'slug',
            value: slug,
        })
        
        const { series } = buildSeries({ postSlug })
        console.log(`-> Series ${series}`)
        boundActionCreators.createNodeField({
            node,
            name: 'series',
            value: series,
        })
    }
}

exports.createPages = async ({
    graphql,
    boundActionCreators: {
        createPage,
        createRedirect,
    },
}) => {
    const queries = creators.map(c => graphql(c.query))
    const results = await Promise.all(queries)
    creators.forEach(({ creator }, index) => {
        const { data, errors } = results[index]

        if (!errors) {
            creator({ data, createPage })
        }
    })

    redirects.forEach(r => createRedirect(r))
}
