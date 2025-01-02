import React from 'react';
import { render, screen } from '@testing-library/react';
import CustomSpooder from './CustomSpooder';
import '@testing-library/jest-dom'

test('renders CustomSpooder component', () => {
    render(<CustomSpooder />);
    const element = screen.getByText(/ω/i);
    expect(element).toBeInTheDocument();
});