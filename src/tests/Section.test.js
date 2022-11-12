import React from 'react';
import { render, screen } from '@testing-library/react';
import Section from "../components/Section"

test('Section should render an output', () => {
  expect(render(<Section />)).toHaveReturned;
});

//