import React from 'react'
import '@testing-library/jest-dom'
import { render, screen, waitFor, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import UserForm from './UserForm'

test('is shows two inputs and a button', () => {
    // render the component
    render(<UserForm/>)

    // manipulate the component or find an element in it
    const inputs = screen.getAllByRole('textbox')
    const button = screen.getByRole('button')

    // Assertion - make sure the component is doing what we expect it to do
    expect(inputs).toHaveLength(2)
    expect(button).toBeInTheDocument()
})

test('it calls addUser when the form is submitted', () => {
    const mock = jest.fn();
    render(<UserForm addUser={mock}/>);

    const nameInput = screen.getByRole('textbox', {name: /name/i})
    const emailInput = screen.getByRole('textbox', {name: /email/i})

   
    fireEvent.change(nameInput, { target: { value: 'John' } });
    fireEvent.change(emailInput, { target: { value: 'johnOmbusuro@gmail.com' } });


    const button = screen.getByRole('button', { name: /add user/i });

    fireEvent.click(button);

    expect(mock).toHaveBeenCalled()
    expect(mock).toHaveBeenCalledWith({name: 'John', email: 'johnOmbusuro@gmail.com'})
})

test('it empties the two inputs when the form is submitted', () => {
    const mock = jest.fn()

    render(<UserForm  addUser={mock}/>)

    const nameInput = screen.getByRole('textbox', {name: /name/i})
    const emailInput = screen.getByRole('textbox', {name: /email/i})
    const button = screen.getByRole('button', {name: /add user/i})

    fireEvent.change(nameInput, {target: {value: 'john'}})
    fireEvent.change(emailInput, {target: {value: 'joshuaOmbasa@gmail.com'}})

    fireEvent.click(button)

    expect(nameInput).toHaveValue('')
    expect(emailInput).toHaveValue('')
})