import React from 'react';
import { render, screen } from '@testing-library/react';
import List from "../components/List"

test('Todo should render an output', () => {
  expect(render(<List />)).toHaveReturned;
});