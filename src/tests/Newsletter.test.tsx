import React from 'react';
import { render, screen } from '@testing-library/react';
import Newsletter from '../pages/Newsletter';

test('renders title', () => {
  render(<Newsletter />);
  const title = screen.getByText(/Inscription à la newsletter/i);
  expect(title).toBeInTheDocument();
});
