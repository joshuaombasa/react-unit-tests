import React from 'react'
import '@testing-library/jest-dom'
import { getAllByRole, render, screen, waitFor, within } from '@testing-library/react'

import UserList from './UserList'

function renderComponent() {
    const users = [{ name: 'Sheila', email: 'subira@gmail.com' }, { name: 'Joshua', email: 'joshua@gmail.com' }]

    render(<UserList users={users} />)

    return {
        users
    }
}

test('render one row per person', () => {

    renderComponent()

    const rows = within(screen.getByTestId('users')).getAllByRole('row')
    // const rows = container.querySelectorAll('tbody tr')

    expect(rows).toHaveLength(2)
})

test('render the name and email of each user', () => {
    const {users} = renderComponent()

    for (let user of users) {
        const name = screen.getByRole('cell', { name: user.name })
        const email = screen.getByRole('cell', { name: user.email })

        expect(name).toBeInTheDocument()
        expect(email).toBeInTheDocument()
    }
})