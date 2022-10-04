import React from 'react';
import { render, screen } from '@testing-library/react';
import { Footer } from '../../Shells';

test('renders learn footer inner text', () => {
    render(<Footer />);
    const footer = screen.getByText(/Footer/i);
    expect(footer).toBeInTheDocument();
});
