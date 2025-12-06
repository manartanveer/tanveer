import React, { useState } from 'react'

function DerivedState() {
  const [group, setGroup] = useState([]);
  const [user, setUser] = useState("");

  const AddToGroup = () => {
    setGroup([...group, user]);
        
  };

  return (
    <div>
      <h1>DerivedState</h1>

      <input 
        value={user} onChange={(event) => setUser(event.target.value)} 
        type="text" placeholder="Enter value" 
      />

      <button onClick={AddToGroup}>AddToGroup</button>

      <h3>Group List:</h3>
      <ul>
        {group.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

    </div>
  )
}

export default DerivedState
