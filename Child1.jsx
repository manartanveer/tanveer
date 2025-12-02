import React from 'react'

function Child1({setUser}) {
  
  return (
    
    <div>
      <h1>Add user</h1>
      <input type="text" onChange={(event)=>setUser(event.target.value)} placeholder="enter text" />
    </div>
  )
}

export default Child1
