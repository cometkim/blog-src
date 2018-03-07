import * as React from 'react'
import Helmet from 'react-helmet'

type SiteHelmetProps = {
    url: string;
    title: string;
    description: string;
    author: SiteUser;
    keywords: string[];
    locale?: 'ko_KR' | 'en_US'
    imageSrc?: string;
}

export default class SiteHelmet extends React.PureComponent<SiteHelmetProps> {
    static defaultProps: Partial<SiteHelmetProps> = {
        locale: 'ko_KR',
        imageSrc: '',
    }

    render() {
        const {
            url,
            title,
            description,
            author,
            keywords,
            locale,
            imageSrc,
        } = this.props

        const lang = locale.slice(0, 2)

        return (
            <Helmet
                htmlAttributes={{ lang }}
            >
                <title>{title}</title>
                <meta name='description' content={description} />
                <meta name='author' content={`${author.name} <${author.email}>`} />
                <meta name='keywords' content={keywords.join(', ')} />

                {/* OpenGraph Tags */}
                <meta property='og:locale' content={locale} />
                <meta property='og:url' content={url} />
                <meta property='og:title' content={title} />
                <meta property='og:description' content={description} />
                {imageSrc ?
                    <meta property='og:image' content={imageSrc} />
                : null}

                {/* Twitter Card Tags */}
                <meta name='twitter:card' content='summary' />
                <meta name='twitter:url' content={url} />
                <meta name='twitter:title' content={title} />
                <meta name='twitter:description' content={description} />
                {imageSrc ?
                    <meta property='twitter:image' content={imageSrc} />
                : null}

            </Helmet>
        )
    }
}
