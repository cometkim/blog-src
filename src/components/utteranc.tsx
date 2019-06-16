import React from 'react'

interface UtterancProps {
    repo: string
    branch: string
    issueTerm: string
}

const Utteranc: React.FC<UtterancProps> = ({ repo, branch, issueTerm }) => {
    const containerRef = React.useRef<HTMLDivElement | null>(null);

    React.useEffect(() => {
        const utteranc = document.createElement('script')
        utteranc.src = 'https://utteranc.es/client.js'
        utteranc.async = true

        utteranc.setAttribute('repo', repo)
        utteranc.setAttribute('branch', branch)
        utteranc.setAttribute('issue-term', issueTerm)

        containerRef.current!.appendChild(utteranc)

        return () => {
            containerRef.current!.innerHTML = ''
        }
    }, [repo, branch, issueTerm])

    return (
        <div ref={containerRef}/>
    )
}

export default Utteranc
