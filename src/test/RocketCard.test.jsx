import React from 'react';
import { render } from '@testing-library/react';
import RocketCard from '../src/components/RocketCard';

test('renders rocket card content', () => {
  // Define mock rocket data
  const rocketData = {
    name: 'Falcon 9',
    description: 'A two-stage orbital launch vehicle.',
    // ... other properties
  };

  // Render the RocketCard component
  const { getByText } = render(<RocketCard rocket={rocketData} />);

  // Use getByText to find content within the rendered component
  const rocketNameElement = getByText(/Falcon 9/i);
  const rocketDescriptionElement = getByText(/A two-stage orbital launch vehicle./i);

  expect(rocketNameElement).toBeInTheDocument();
  expect(rocketDescriptionElement).toBeInTheDocument();
});
