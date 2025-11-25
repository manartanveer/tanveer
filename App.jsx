import React, { useState } from 'react'

function App() {
  let [name , setName]= useState ("Tanveer");
  function changName(){
    setName(prev =>prev === "Tanveer" ? "Kashan" : "Tanveer");
  }
  return (
    <div>

      <h1>{name}</h1>
      <button onClick={changName}>click me</button>
    </div>
  )
}

export default App
