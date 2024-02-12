import React from "react";


export default function UserList({users}) {

    const usersList = users.map(user => (
        <tr key={user.name}>
            <td>{user.name}</td>
            <td>{user.email}</td>
        </tr>
    ))
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody data-testid="users">
                {usersList}
            </tbody>
        </table>
    )
}