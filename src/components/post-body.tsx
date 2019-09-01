import styled from '@emotion/styled';

import theme from '~/src/utils/theme';

export default styled.article`
    font-weight: 400;

    a {
        color: ${theme.primaryColor};

        :focus, :active, :hover {
            text-decoration: underline;
        }
    }

    strong {
        font-weight: 600;
    }

    blockquote {
        position: relative;
        color: #999;
        margin: 1.25rem 0;
        padding-left: 2.5rem;

        &:before {
            content: '\u201C';
            position: absolute;
            top: -30px;
            left: 0;
            font-size: 3.75rem;
            font-weight: bold;
        }
    }

    code:not(.vscode-highlight-code) {
        font-size: .8rem;
        padding: .15rem .4rem;
        background-color: ${theme.grayColor};
        border-radius: 3px;
    }

    ul {
        padding-left: 1.5rem;
    }

    img {
        max-width: 100%;
    }

    .gatsby-resp-image-wrapper {
        box-shadow: 0 0 1.25rem rgba(0, 0, 0, .1);
    }

    .twitter-tweet {
        margin: auto;
        box-shadow: 0 0 1.25rem rgba(0, 0, 0, .1);
    }
`;
