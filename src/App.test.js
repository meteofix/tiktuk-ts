import App from './App';
import { render, screen } from '@testing-library/react';

jest.mock('./services/AppRouter', () => () => 'renders AppRouter');

describe('App', () => {
  it('should renders AppRouter', () => {
    render(<App />);

    expect(screen.getByText(/renders approuter/i)).toBeInTheDocument();
  });
});
