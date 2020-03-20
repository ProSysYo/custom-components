import React, { useState, useEffect } from "react"
import Input from "../../components/Input/Input";

const TestMirage = () => {
  let [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("/api/users")
      .then(res => res.json())
      .then(json => {
        setUsers(json.users)
      })
  }, []);

  return (
    <ul data-testid="users">
      {users.map(user => (
        <li key={user.id} >
            <Input value={user.name}/>
            <br/>       
        </li>
      ))}
    </ul>
  )
}

export default TestMirage;