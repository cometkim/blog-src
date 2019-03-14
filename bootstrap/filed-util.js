const { createFilePath } = require('gatsby-source-filesystem')

const buildSlug = (context) => () => {
    const { node, getNode } = context

    const basePath = 'blog-posts/posts'
    return createFilePath({ node, getNode, basePath })
}

const buildSeries = (context) => (slug) => {
    const trimSlash = path => path.slice(
        1, // the slug is always began with `/`
        path.endsWith('/') ? -1 : undefined,
    )

    const [series, name] = trimSlash(slug).split('/')
    return name ? series : null
}

const createFieldUtil = (context) => ({
    buildSlug: buildSlug(context),
    buildSeries: buildSeries(context),
})

module.exports = {
    createFieldUtil,
    buildSlug,
    buildSeries,
}
