import React from 'react';
import { render, screen } from '@testing-library/react';
import Screen from '../components/Screen';

test('renders math equation', () => {
  render(<Screen text={'1+((2*3)/4)'} />);
  const equation = screen.getByText("1+((2*3)/4)");
  expect(equation).toBeInTheDocument();
});
