import React, {useState} from 'react'


function InputData() {
     const [val, setValue] = useState("")
  return (
    <div>
      <h1>OnChangeEvent</h1>
      <input type="text" value={val} onChange={(event)=>setValue(event.target.value)} placeholder='Enter text'  />
      <h1>{val}</h1>
      <button onClick={()=>setValue("")}>Reset</button>
    </div>
  )
}

export default InputData
