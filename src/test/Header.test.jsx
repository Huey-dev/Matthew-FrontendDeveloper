import React from 'react';
import { render } from '@testing-library/react';
import Header from '../../src/components/Header';
import '@testing-library/jest-dom/extend-expect';


test('renders header text', () => {
  const { getByText } = render(<Header />);
  const headerElement = getByText(/SpaceX Rockets Landing Page/i); // Update the regular expression
  expect(headerElement).toBeInTheDocument();
});
