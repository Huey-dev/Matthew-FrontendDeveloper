import React from 'react';
import { render } from '@testing-library/react';
import RocketPopup from '../src/components/RocketPopup';

test('renders rocket popup content', () => {
  // Render the RocketPopup component
  const { getByText } = render(<RocketPopup isOpen={true} rocketName="Falcon 9" />);

  // Use getByText to find content within the rendered component
  const rocketNameElement = getByText(/Falcon 9/i);
  expect(rocketNameElement).toBeInTheDocument();
});
