import React, { useEffect, useState } from 'react'

function App() {
  const [counter , setCounter] = useState(2);
  
  function whenMount(){
    console.log("component is mounted");
  }
    function whenunMount(){
    console.log("component is unmount");
  }
    function whenEnd(){
    console.log("component is unmount");
  }


useEffect (()=>{  whenMount()},[])
useEffect (()=>{  whenunMount()},[counter])
useEffect (()=>{  
  return ()=> whenEnd();
},[counter])
  
  return (

    <div>
      <h1>{counter}</h1>
      <button onClick={()=>setCounter(counter + 2)}>Count</button>

    </div>
  )
}

export default App
