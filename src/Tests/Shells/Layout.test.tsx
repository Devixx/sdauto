import React from 'react'
import { render, screen } from '@testing-library/react'
import { Layout } from '../../Components'

test('renders learn footer header and socials in layout', () => {
    render(<Layout />)
    const footer = screen.getByText(/Certificat/i)
    expect(footer).toBeInTheDocument()
})
