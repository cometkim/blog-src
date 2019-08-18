import * as React from 'react';
import styled from 'styled-components';

import theme from '~/src/utils/theme';

export default () => (
  <Container>
    <LicenseLink>
      <img
        alt='크리에이티브 커먼즈 라이선스'
        src='https://i.creativecommons.org/l/by-sa/4.0/88x31.png'
      />
    </LicenseLink>
    <div>
            이 저작물은 <LicenseLink>크리에이티브 커먼즈 저작자표시-동일조건변경허락 4.0 국제 라이선스</LicenseLink>에 따라 이용할 수 있습니다.
    </div>
  </Container>
);

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: ${theme.contentSpacing} 0;
    padding: ${theme.contentSpacing} ${theme.contentSidePadding};
    border: 1px solid ${theme.grayColor};
`;

const LicenseLink = ({ children }: any) => (
  <a
    rel='license'
    href='https://creativecommons.org/licenses/by-sa/4.0/'
    target='_blank'
  >
    {children}
  </a>
);
