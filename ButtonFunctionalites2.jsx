
import React, { useState } from 'react'

function ButtonFunctionalites2() {
    const [val, setVal] = useState(0);
    const addVal=()=>{
      setVal(val + 1);
    }
    const decVal=()=>{
        setVal(val - 1);
    }
    const Reset=()=>{
        setVal(0);
    }
    const getColor=()=>{
        if(val ==0) return "pink";
        if(val >3) return "green";
        if(val <3) return "red";
        return "yellow";
    }
  return (
    <div>
      <h1 style={{color : getColor()}}>Button : {val}</h1>
      <button onClick={addVal}>Add</button>
      <button onClick={decVal}>Minus</button>
      <button onClick={Reset}>ResetVal</button>
    </div>
  )
}

export default ButtonFunctionalites2
