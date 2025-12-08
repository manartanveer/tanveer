
import React, { useState } from 'react'

function ButtonFunctionalites() {
    const [val , setVal] = useState(0);
    const Increase=()=>{
        setVal(val + 1 );
    }
    const Decrease=()=>{
        setVal(val -1);
    }
    const Reset=()=>{
        setVal(0);
    }
    const getColor=()=>{
        if(val == 2) return "black";
        if(val > 5) return "green";
        if(val < 5) return "red";
        return "black";
    };

    
  return (
    <div>
      <h1 style={{color : getColor()}}>Increase/Decrease,{val}</h1>
      <button className='text-green-500' onClick={Increase}>Inc</button>
      <button className='text-red-600' onClick={Decrease} disabled={val===0} >Dec</button>
      
      <button className='text-black-200' onClick={Reset}>Reset</button>
    </div>
  )
}

export default ButtonFunctionalites
