import React from 'react';
import { render } from '@testing-library/react';
import App from '../../src/App';

test('renders app header', () => {
  // Render the App component
  const { getByText } = render(<App />);

  // Use getByText to find content within the rendered component
  const headerElement = getByText(/SpaceX Rockets Landing Page/i);
  expect(headerElement).toBeInTheDocument();
});

// You can add more test cases for other features of your App component
