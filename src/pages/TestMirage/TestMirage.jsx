import React, { useState, useEffect } from "react"
import TableUsers from "./TableUers/TableUsers";

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
      <div>
          <TableUsers users={users}/>
      </div>
    
  )
}

export default TestMirage;