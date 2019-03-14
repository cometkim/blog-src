const createPageCreator = (context) => ({ query, mapDataToProps }) => async () => {
    const { graphql, actions: { createPage } } = context
    const { data, errors } = await graphql(query)

    if (errors) {
        throw new Error(errors)
    }

    return mapDataToProps(data).map(props => createPage(props))
}

const createPageUtil = (context) => ({
    createPageCreator: createPageCreator(context),
})

module.exports = {
    createPageUtil,
    createPageCreator,
}
