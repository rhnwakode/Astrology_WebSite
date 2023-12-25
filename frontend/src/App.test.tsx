import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  test('should exist', () => {
    render(<App />);
    expect(screen.getByText(/app/i)).toBeDefined();
  });
});
