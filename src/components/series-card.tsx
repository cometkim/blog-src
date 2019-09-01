import * as React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';

export type SeriesCardProps = {
  name: string,
  count: number,
};

const SeriesLink = styled(Link)`
  font-size: 1.25rem;
  font-weight: bold;
`;

export default ({ name, count }: SeriesCardProps) => (
  <>
    <SeriesLink to={`/series/${name}/`}>{name}</SeriesLink>
    <div>{count}개의 포스트가 있습니다.</div>
  </>
);
