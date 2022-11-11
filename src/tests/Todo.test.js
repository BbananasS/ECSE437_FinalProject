import React from 'react';
import { render, screen } from '@testing-library/react';
import Todo from "../components/Todo"

test('Todo should render an output', () => {
  expect(render(<Todo />)).toHaveReturned;
});

test('removeTodo-button should have correct style', () => {
    render(<Todo />)
    const button = screen.getByRole("Button", {className: "ui button circular icon pink"})
    expect(button).toHaveStyle("color: pink")
})

test('markTodoAsDone-button should have correct style', () => {
    render(<Todo />)
    const button = screen.getByRole("Button", {className: "ui button circular icon green"})
    expect(button).toHaveStyle("color: green")
})

test('handleButtonClick should make todo name be green', () => {
    const output = render(<Todo />)("Homework", false, false, false)
    handleButtonClick()
    expect(completedState).toBeTrue()
    const header = screen.getByRole("Header", {className: "ui header green"})
    expect(header).toHaveStyle("color: green")
})

test('handleInputOnChange should cause input value to change', () => {
    const output = render(<Todo />)("Homework", false, false, false)
    handleInputOnChange("_2")
    expect(tempValue).toEqual("Homework_2")
})

test('handleDivDoubleClick should set isEditing to true', () => {
    const output = render(<Todo />)("Homework", false, false, false)
    expect(isEditing).toBeFalsy()
    handleDivDoubleClick()
    expect(isEditing).toBeTrue()
})

test('handleInputKeyDown with "enter" should accept changes', () => {
    const output = render(<Todo />)("Homework", false, false, false)
    const tempValue = "Homework_2"
    handleInputKeyDown(13)
    expect(value).toEqual(tempValue)
})

test('handleInputKeyDown with "esc" should discard changes', () => {
    const output = render(<Todo />)("Homework", false, false, false)
    expect(isEditing).toBeFalsy()
    handleInputKeyDown(27)
    expect(value).toEqual("Homework")
})