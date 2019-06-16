import React from 'react'
import debounce from 'lodash/debounce'

interface ScrollState {
    pageYOffset: number
    deltaY: number
    scrollingDown: boolean
}

const initialScrollState = {
    pageYOffset: 0,
    deltaY: 0,
    scrollingDown: false,
}

const ScrollState = React.createContext<ScrollState>(initialScrollState)

export const ScrollStateProvider: React.FC = ({ children }) => {
    const [state, setState] = React.useState(initialScrollState)

    React.useEffect(() => {
        let prevPageYOffset = 0
        const handleScroll = debounce(() => {
            const { pageYOffset } = window
            const deltaY = pageYOffset - prevPageYOffset
            const scrollingDown = pageYOffset !== 0 && deltaY >= 0

            setState({ pageYOffset, deltaY, scrollingDown })
            prevPageYOffset = pageYOffset
        }, 30, {
            leading: false,
            trailing: true,
        })
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <ScrollState.Provider value={state}>
            {children}
        </ScrollState.Provider>
    )
}

export function useScrollState() {
    const state = React.useContext(ScrollState)
    return state
}
