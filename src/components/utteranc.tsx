import * as React from 'react'

interface UtterancProps {
    repo: string
    branch: string
    issueTerm: string
}

export default ({ repo, branch, issueTerm }: UtterancProps) => (
    <script
        src='https://utteranc.es/client.js'
        // @ts-ignore
        repo={repo}
        branch={branch}
        issue-term={issueTerm}
        async
    />
)
