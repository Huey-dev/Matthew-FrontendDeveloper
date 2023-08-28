import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SearchBar from '../src/components/SearchBar';

test('renders search bar', () => {
  // Render the SearchBar component
  const { getByPlaceholderText } = render(<SearchBar />);

  // Use getByPlaceholderText to find the search input
  const searchInput = getByPlaceholderText(/Search rockets.../i);
  expect(searchInput).toBeInTheDocument();
});

test('handles search input', () => {
  // Render the SearchBar component
  const { getByPlaceholderText } = render(<SearchBar />);

  // Use getByPlaceholderText to find the search input
  const searchInput = getByPlaceholderText(/Search rockets.../i);

  // Simulate user input by firing a change event
  fireEvent.change(searchInput, { target: { value: 'Falcon' } });

  // Check if the input value has changed
  expect(searchInput.value).toBe('Falcon');
});

// You can add more test cases for other features of the SearchBar component
