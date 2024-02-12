import React from 'react'
import '@testing-library/jest-dom'
import { render, screen, waitFor, fireEvent } from '@testing-library/react'


import App from './App'

test('can receive a new user and show it on a list', () => {
    render(<App />)

    const nameInput = screen.getByRole('textbox', { name: /name/i })
    const emailInput = screen.getByRole('textbox', { name: /email/i })
    const button = screen.getByRole('button', { name: /add user/i })


    fireEvent.change(nameInput, { target: { value: 'John' } });
    fireEvent.change(emailInput, { target: { value: 'johnOmbusuro@gmail.com' } });

    fireEvent.click(button)

    const name = screen.getByRole('cell', { name: 'John' })
    const email = screen.getByRole('cell', { name: 'johnOmbusuro@gmail.com' })

    expect(name).toBeInTheDocument()
    expect(email).toBeInTheDocument()
})





