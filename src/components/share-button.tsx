import * as React from 'react'
import styled from 'styled-components'
import Icon from 'react-icons-kit'
import {
    twitter,
    facebook,
    googlePlus
} from 'react-icons-kit/fa'

import theme from 'utils/theme'

type SocialIntentInfo = {
    intentUrl: string,
    urlParam: string,
    icon: any,
    color: string,
}

type ShareButtonProps = {
    url: string,
    size: number,
}

const createShareButton = ({ intentUrl, urlParam, icon, color }: SocialIntentInfo) => {
    return class extends React.PureComponent<ShareButtonProps> {
        url = `${intentUrl}?${urlParam}=${this.props.url}`

        handleClick = (event: any) => {
            event.preventDefault()
            window.open(this.url, '', 'menubar=no,toolbar=no,height=350,width=600')
        }

        render() {
            const IconLink = styled.a`
                text-decoration: none;
                color: lightgray;
                transition: color .2s ease;
                :hover {
                    color: ${color};
                }
            `

            return (
                <IconLink
                    href={this.url}
                    onClick={this.handleClick}
                >
                    <Icon icon={icon} size={this.props.size}/>
                </IconLink>
            )
        }
    }
}

export default {
    Twitter: createShareButton({
        intentUrl: 'https://twitter.com/intent/tweet',
        urlParam: 'url',
        icon: twitter,
        color: '#1b95e0',
    }),
    Facebook: createShareButton({
        intentUrl: 'https://www.facebook.com/sharer/sharer.php',
        urlParam: 'u',
        icon: facebook,
        color: '#4267b2',
    }),
    GooglePlus: createShareButton({
        intentUrl: 'https://plus.google.com/share',
        urlParam: 'url',
        icon: googlePlus,
        color: '#db4437',
    }),
}
