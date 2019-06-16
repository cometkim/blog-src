import React from 'react'
import { render, cleanup } from '@testing-library/react'

import AboutPage from './about'

jest.mock('hooks/use-site-metadata')

describe('page/AboutPage', () => {
    afterEach(cleanup)

    it('should render properly', () => {
        const { container } = render(<AboutPage/>)
        expect(container).toMatchSnapshot()
    })
})
