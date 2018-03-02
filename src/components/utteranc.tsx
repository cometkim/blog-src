import * as React from 'react'

interface UtterancProps {
    repo: string
    branch: string
    issueTerm: string
}

export default class Utteranc extends React.PureComponent<UtterancProps> {
    instance: HTMLDivElement = null;

    componentDidMount() {
        const utteranc = document.createElement('script')
        utteranc.src = 'https://utteranc.es/client.js'
        utteranc.async = true

        utteranc.setAttribute('repo', this.props.repo)
        utteranc.setAttribute('branch', this.props.branch)
        utteranc.setAttribute('issue-term', this.props.issueTerm)

        this.instance.appendChild(utteranc)
    }

    render() {
        return <div ref={el => (this.instance = el)} />
    }
}
