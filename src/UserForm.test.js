import React from 'react'
import '@testing-library/jest-dom'
import { render, screen, waitFor } from '@testing-library/react'
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
    
})