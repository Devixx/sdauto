import React from 'react'
import { render, screen } from '@testing-library/react'
import { NavBar } from '../../Shells'

test('renders learn navbar inner text', () => {
    render(<NavBar />)
    const dashboard = screen.getByText(/COC/i)
    expect(dashboard).toBeInTheDocument()
})
