import { useState } from 'react'

// import './App.css'
import UserForm from './UserForm'
import UserList from './UserList'

function App() {
  const [users, setUsers] = useState([])

  function addUser(user) {
    setUsers(prevState => [...prevState, user])
  }

  return (
    <>
      <UserForm addUser={addUser} />
      <hr />
      <UserList users={users}/>
    </>
  )
}

export default App
