import React from 'react';
import { render, screen } from '@testing-library/react';
import { Layout } from '../../Components';

test('renders learn footer header and socials in layout', () => {
    render(<Layout />);
    const footer = screen.getByText(/Footer/i);
    const socials = screen.getByText(/Socials/i);
    expect(footer).toBeInTheDocument();
    expect(socials).toBeInTheDocument();
});
