import React, { useState } from 'react'
import MyImage from './MyImage';

function NumberToWord() {
    const [number, setNumber] = useState (0);
   
  return (
    <div>
      <h1>Number to word</h1>
      <h1>{number}</h1>
      <button onClick={()=>setNumber(number + 1 )}>Plus</button>
      <button onClick={()=>setNumber(number - 1)}>Minus</button>
      <button onClick={()=>setNumber(0)}>Reset</button>
      <h1>Range until </h1>
      {
        number==0?<h1>0</h1>
        :number==1?<h1>1</h1>
        :number==1?<h1>1</h1>
        :number==2?<h1>2</h1>
        :number==3?<h1>3</h1>
        : number==4?<h1>4</h1>
        :number==5?<h1>5</h1> : <h1>Out of Rang</h1>
        
      }
     
    </div>
  )
}

export default NumberToWord
