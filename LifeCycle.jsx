import React, { useEffect, useState } from 'react'

function LifeCycle() {
    const [ counter,setCounter]= useState (2);
    function WhenMounted(){
        console.log("mounted Successfully");
    }
     function WhenUpdated(){
        console.log("Update Successfully");
    }
     function WhenMountedEnd(){
        console.log("End mounted Successfully");
    }
    useEffect(()=>{ WhenMounted();},[counter])
    useEffect(()=>{WhenUpdated();},[])
    useEffect(()=>{ 
        return()=>WhenMountedEnd();
    },[])
    
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={()=>setCounter(counter +2)}>counter</button>
    </div>
  )
}

export default LifeCycle
