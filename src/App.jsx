import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserForm from './UserForm'
import UserList from './UserList'

function App() {
  const [users, setUsers] = useState([])

  function addUser(user) {
    setUsers(prevState => [...prevState, user])
  }

  console.log(users)

  return (
    <>
      <UserForm addUser={addUser} />
      <hr />
      <UserList users={users}/>
    </>
  )
}

export default App
