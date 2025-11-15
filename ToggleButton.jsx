import React, { useState } from 'react'
import MyImage from './MyImage';

function ToggleButton() {
    const [display,setDisplay]=useState(false);
  return (
    <div>
      <h1>Toggle Button (OnOff)</h1>
      <button onClick={()=>setDisplay(!display)}>On|Off</button>
      
       
       {
    //    display?<h1>Tanveer</h1> :null
    display?<MyImage/>  :null
       }

       
    </div>
  )
}

export default ToggleButton
