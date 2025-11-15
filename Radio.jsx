import React, { useState } from 'react'

function Radio() {
    const [gender, setGender] = useState("");
    const [city , setCity] = useState("");
  return (
    <div>
        
      <h1>DropDownList</h1>
      <input type="Radio" style={{color:'green'}} onClick={(event)=>setGender(event.target.value)} name='gender' id='Male' value={'Male'} />
      <label style={{color : 'gold'}} htmlFor="Male">Male</label>
      <br />
      <input type="Radio" onClick={(event)=>setGender(event.target.value)} name='gender' id='Female' value={'Female'} />
      <label style={{color :'yellow'}} htmlFor="Female">Female</label>
      <h2 style={{color :"pink"}}>Gender : {gender}</h2>
      

      <h3>Select City</h3>
      <select onClick={(event)=>setCity(event.target.value)} defaultValue={'Sheikhpura'} name="" id="">
        <option value="Gujranwala">Gujranwala</option>
        <option value="Lahore">Lahore</option>
        <option value="Gujrat">Gujrat</option>
        <option value="Islamabad">Islamabad</option>
      </select>
      <h3 style={{color: 'goldenrod'}}>Selected city : {city}</h3>
      <button style={{color: 'red', border : 'solid'}} onClick={()=>setCity("Lahore")} >Reset</button>
    </div>
    
  )
}

export default Radio
