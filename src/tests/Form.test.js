import React from 'react';
import { render, screen } from '@testing-library/react';
import Form from "../components/Form"

test('Form should render an output', () => {
  expect(render(<Form />)).toHaveReturned;
});

test('submitTodo-button should have correct style', () => {
  render(<Form />)
  const button = screen.getByRole("Button", {className: "ui button circular icon 25251E"})
  expect(button).toHaveStyle("color: 25251E")
})

test('Todo-inputField should have correct style', () => {
  render(<Form />)
  const input = getByPlaceholder("Enter a task")
  inputValue = "Homework"
  expect(input).toHaveStyle({
    value: inputValue,
    type: "text"
  })
})

test('handleInputChange should cause input value to change', () => {
  render(<Form />)
  handleInputOnChange("Homework")
  expect(inputValue).toEqual("Homework")
})

test('handleFormSubmit should not cause page to refresh', () => {
  const output = render(<Form />)
  handleFormSubmit("Homework")
  expect(output).toHaveReturned()
})

test('handleFormSubmit with empty input field should not create todo', () => {
  const output = render(<Form />)
  const inputValue = ""
  handleFormSubmit(inputValue)
  const output2 = render(<Form />)
  expect(output).toEqual(output2)
})

test('handleFormSubmit should set input field to ""', () => {
  const output = render(<Form />)
  const inputValue = "Homework"
  handleFormSubmit(inputValue)
  expect(inputValue).toEqual("")
})