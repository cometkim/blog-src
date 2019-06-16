import React from 'react'
import { render, cleanup } from '@testing-library/react'

import NotFoundPage from './404'

describe('page/NotFoundPage', () => {
    afterEach(cleanup)

    it('should render properly', () => {
        const { container } = render(<NotFoundPage/>)
        expect(container).toMatchSnapshot()
    })
})
