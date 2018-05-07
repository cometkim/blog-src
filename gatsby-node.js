const { createFilePath } = require('gatsby-source-filesystem')

const {
    creators,
    redirects,
    buildSlug,
    buildSeries
} = require('./node-utils')

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
