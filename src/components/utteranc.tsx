import React from 'react';
import styled from 'styled-components';

// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import utterancClient from '!!file-loader?modules!~/vendor/utteranc-client';

interface UtterancProps {
  repo: string
  branch: string
  issueTerm: string
}

const Container = styled.div`
  .utterances {
    position: relative;
    box-sizing: border-box;
    width: 100%;
    max-width: 760px;
    margin-left: auto;
    margin-right: auto;
  }
  .utterances-frame {
    position: absolute;
    left: 0;
    right: 0;
    width: 1px;
    min-width: 100%;
    max-width: 100%;
    height: 100%;
    border: 0;
  }
`;

const Utteranc: React.FC<UtterancProps> = ({ repo, branch, issueTerm }) => {
  const containerRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    const utteranc = document.createElement('script');
    utteranc.id = 'utteranc-client';
    utteranc.src = utterancClient;
    utteranc.async = true;

    utteranc.setAttribute('repo', repo);
    utteranc.setAttribute('branch', branch);
    utteranc.setAttribute('issue-term', issueTerm);

    containerRef.current!.appendChild(utteranc);
  }, [repo, branch, issueTerm]);

  return (
    <Container ref={containerRef}/>
  );
};

export default Utteranc;
