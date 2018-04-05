import styled from 'styled-components'
import theme from 'utils/theme'

export default styled.article`
    word-break: keep-all;
    font-weight: 300;

    a {
        color: ${theme.primaryColor};
        font-weight: 400;

        :focus, :active, :hover {
            text-decoration: underline;
        }
    }

    strong {
        font-weight: 500;
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
`
