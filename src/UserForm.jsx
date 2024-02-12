import React, { useState } from "react";

export default function UserForm({ addUser }) {

    const [formData, setFormData] = useState({
        name: '',
        email: ''
    })

    function handleSubmit(event) {
        event.preventDefault()

        addUser(formData)
        setFormData({
            name: '',
            email: ''
        })
    }

    function handleChange(event) {
        const { name, value } = event.target
        setFormData(prevState => (
            {
                ...prevState,
                [name]: value
            }
        ))
    }


    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name</label>
                <input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
            </div>
            <button>Add user</button>
        </form>
    )
}