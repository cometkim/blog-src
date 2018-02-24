import styled from 'styled-components'
import theme from 'utils/theme'

export default styled.article`
    overflow: auto;

    p {
        font-size: 17px;
    }

    blockquote {
        position: relative;
        color: #999;
        margin: 20px 0;
        padding-left: 40px;

        &:before {
            content: '\u201C';
            position: absolute;
            top: -30px;
            left: 0;
            font-size: 60px;
            font-weight: bold;
        }
    }
`
