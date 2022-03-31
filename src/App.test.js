import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('./services/AppRouter', () => () => 'renders AppRouter');

describe('App', () => {
  it('should renders AppRouter', () => {
    render(<App />);

    expect(screen.getByText(/renders approuter/i)).toBeInTheDocument();
  });
});
