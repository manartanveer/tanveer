import React, { useEffect, useState } from 'react'

function Effect() {
    let [count , setCount] = useState (2);
    let [data , setData] = useState (3);

    function onCall(){
        console.log("oncall");
        
    }
    useEffect(()=>{onCall();},[count ])
    
  return (
    <div>
      <h1>Counter : {count}</h1>
      <h1>Counter : {data}</h1>
      <button onClick={()=>setCount(count+2)}>count</button>
      <button onClick={()=>setData(count+4)}>Data</button>
      
    </div>
  )
}

export default Effect
