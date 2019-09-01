import React from 'react';
import styled from '@emotion/styled';
import { useStaticQuery, graphql } from 'gatsby';

import {
  Layout,
  Header,
  TagList,
  Footer,
} from '~/src/components';

import theme from '~/src/utils/theme';

const Container = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: ${theme.headerHeight};
    padding-left: ${theme.contentSidePadding};
    padding-right: ${theme.contentSidePadding};
`;

const Summary = styled.div`
    font-size: 1.25rem;
    margin: ${theme.contentSpacing} 0;
`;

const TagsPage: React.FC = () => {
  const data = useStaticQuery(graphql`
        query AllTagQuery {
            site {
                siteMetadata {
                    title
                    owner {
                        name
                    }
                }
            }
            allMarkdownRemark(
                filter: { frontmatter: { tags: { ne: null } } }
            ){
                group(
                    field: frontmatter___tags
                ){
                    fieldValue
                    totalCount
                }
            }
        }
    `);

  const tags = data.allMarkdownRemark.group
    .map((group: any) => group.fieldValue);

  return (
    <Layout>
      <Header fixed title={data.site.siteMetadata.title} />
      <Container>
        <Summary>{tags.length}개의 태그가 있습니다.</Summary>
        <TagList tags={tags}/>
      </Container>
      <Footer owner={data.site.siteMetadata.owner.name} />
    </Layout>
  );
};

export default TagsPage;
