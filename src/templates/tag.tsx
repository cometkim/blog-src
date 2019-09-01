import React from 'react';
import styled from '@emotion/styled';
import { graphql } from 'gatsby';

import { useSiteMetadata } from '~/src/hooks/use-site-metadata';
import theme from '~/src/utils/theme';

import {
  Layout,
  Header,
  PostCardList,
  Footer,
} from '~/src/components';

interface TagPageTemplateProps {
  data: any;
  pathContext: {
    tag: string,
  },
}

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: ${theme.headerHeight};
`;

const SeriesSummary = styled.div`
  font-size: 1.3rem;
  margin-top: ${theme.contentSpacing};
  padding: 0 ${theme.contentSidePadding};
`;

const TagPageTemplate: React.FC<TagPageTemplateProps> = ({ data, pathContext }) => {
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
        <SeriesSummary>{pathContext.tag}: {data.allMarkdownRemark!.edges.length}개의 글이 있습니다.</SeriesSummary>
        <PostCardList posts={posts}/>
      </Container>
      <Footer owner={siteMetadata.owner.name} />
    </Layout>
  );
};

export default TagPageTemplate;

export const pageQuery = graphql`
  query TagPage($tag: String!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { eq: $tag } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          excerpt(format: MARKDOWN)
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
