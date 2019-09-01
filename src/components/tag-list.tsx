import * as React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';

import theme from '~/src/utils/theme';

export interface TagListProps {
  tags: string[]
}

export default ({ tags }: TagListProps) => (
  <TagList>
    {tags.map((tag, index) => (
      <TagItem key={index}>
        <TagLink to={`/tags/${tag}/`}>{tag}</TagLink>
      </TagItem>
    ))}
  </TagList>
);

const TagList = styled.ul`
    margin: 0;
    padding-left: 0;
    list-style: none;
`;

const TagLink = styled(Link)`
    color: ${theme.blackColor};
`;

const TagItem = styled.li`
    float: left;
    font-size: .75rem;
    background-color: ${theme.grayColor};
    border-radius: 3px;
    margin: .2rem;
    padding: .15rem .6rem;
`;
