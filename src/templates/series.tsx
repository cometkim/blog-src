import React from 'react';
import styled from '@emotion/styled';
import { graphql } from 'gatsby';

import theme from '~/src/utils/theme';
import {
  Layout,
  Header,
  PostCardList,
  Footer,
} from '~/src/components';
import { useSiteMetadata } from '~/src/hooks/use-site-metadata';

interface SeriesPageTemplateProps {
  data: any;
  pathContext: {
    series: string,
  };
}

const Container = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: ${theme.headerHeight};
`;

const Summary = styled.div`
    font-size: 1.3rem;
    font-weight: 500;
    margin-top: ${theme.contentSpacing};
    padding: 0 ${theme.contentSidePadding};
`;

const SeriesPageTemplate: React.FC<SeriesPageTemplateProps> = ({ data, pathContext }) => {
  const siteMetadata = useSiteMetadata();
  const posts = data.allMarkdownRemark.edges
    .map((edge: any) => edge.node)
    .map(({ fields, frontmatter, excerpt }: any) => ({
      ...fields,
      ...frontmatter,
      excerpt,
    }));
  return (
    <Layout>
      <Header fixed title={siteMetadata.title} />
      <Container>
        <Summary>{pathContext.series}</Summary>
        <PostCardList posts={posts}/>
      </Container>
      <Footer owner={siteMetadata.owner.name} />
    </Layout>
  );
};

export default SeriesPageTemplate;

export const pageQuery = graphql`
    query SeriesPage($series: String!) {
        allMarkdownRemark(
            sort: { fields: [frontmatter___date], order: DESC }
            filter: { fields: { series: { eq: $series } } }
        ) {
            edges {
                node {
                    fields {
                        slug
                    }
                    excerpt
                    frontmatter {
                        title
                        author
                        date(formatString: "YYYY년 M월 D일")
                        tags
                    }
                }
            }
        }
    }
`;
