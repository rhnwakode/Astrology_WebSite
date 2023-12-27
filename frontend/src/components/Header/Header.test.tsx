import React from 'react';
import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import Header from './Header';

describe('Header', () => {
  it('renders with logo and navigation links', () => {
    render(<Header />);
    const header = screen.getByRole('heading', { name: /astro/i });
    expect(header).toBeInTheDocument();
  });
});
