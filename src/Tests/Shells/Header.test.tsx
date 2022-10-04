import React from 'react'
import { render, screen } from '@testing-library/react'
import { Header } from '../../Shells'

test('renders learn header inner text', () => {
    render(<Header />)
    const navbar = screen.getByText(/Dashboard/i)
    expect(navbar).toBeInTheDocument()
})
