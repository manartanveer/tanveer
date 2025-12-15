
import React, { useState } from 'react'

function Calc() {
  const [number, setNumber] =useState("");
  const [number2, setNumber2] =useState("");
  const [result, setresult] =useState("");
  const Calculation =(operator)=>{
    const a = parseFloat(number);
    const b  = parseFloat(number2);
    if(isNaN(a)||isNaN(b)){
      setNumber("Enter the valid value");
      
    return;
  }
  switch (operator){
    case  "+" :
  setresult(a + b);
  break;
  
    case  "-" :
  setresult(a - b);
  break;
  case "*":
    setresult(a*b);
    break;
  case "/":
    setresult(a/b);
    break;
    default:
      break;
  }
  };

      
  return (
    <div>
      <h1>{result}</h1>

      <input 
  type="text" 
  value={number} 
  onChange={(e) => setNumber(e.target.value)} 
  placeholder="Number 1"
/>
<input 
  type="text" 
  value={number2} 
  onChange={(e) => setNumber2(e.target.value)} 
  placeholder="Number 2"
/>
<button onClick={() => Calculation("+")}>+</button>
<button onClick={() => Calculation("-")}>-</button>
<button onClick={() => Calculation("*")}>*</button>
<button onClick={() => Calculation("/")}>/</button>

    </div>
  )
}

export default Calc
