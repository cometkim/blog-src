exports.createPages = async ({ boundActionCreators, graphql }) => {
    const query = `{
        posts: allMarkdownRemark {
            edges {
                node {
                    html
                    id
                    frontmatter {
                        path
                        title
                    }
                }
            }
        }
    }`;
    const { data, errors } = await graphql(query);

    if (errors) {
        throw new Error(errors);
    }

    const { createPage } = boundActionCreators;

    data.posts.edges
        .map(p => p.node)
        .map(post => ({
            path: post.frontmatter.path,
            component: `${__dirname}/src/templates/post.tsx`,
        }))
        .forEach(ctx => createPage(ctx));
}