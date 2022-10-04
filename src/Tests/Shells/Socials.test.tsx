import React from 'react'
import { render, screen } from '@testing-library/react'
import { Socials } from '../../Shells'

test('renders learn footer inner text', () => {
    render(<Socials />)
    const facebook = screen.findByAltText(/facebook/)
    expect(facebook).toBeDefined()
})
