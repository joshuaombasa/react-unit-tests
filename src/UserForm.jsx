import React, { useState } from "react";

export default function UserForm({ addUser}) {

    const [email, setEmail] = useState('')
    const [name, setName] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        addUser({name, email})
    }

    return <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="name">Name</label>
            <input
                id="name"
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
        </div>
        <div>
            <label htmlFor="email">Email</label>
            <input
                id="email"
                type="text"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
        </div>
        <button>Add user</button>
    </form>
}