import React, { useState } from 'react'

function ControlComponents() {
    const [name , setName] = useState ("");
    const [poss , setPoss] = useState ("");
    const [tele , setTele] = useState ("");

    function ClearData(){
        setName("");
        setPoss("");
        setTele("")
    }
  return (
    <div>
      <h1>Control</h1>
      <form   action="">
        <input type="text" value={name} onChange={(event)=>setName(event.target.value)} placeholder='Text me' />
        <input type="possword" value={poss} onChange={(event)=>setPoss(event.target.value)}  placeholder='Text me' />
        <input type="tele" value={tele} onChange={(event)=>setTele(event.target.value)}  placeholder='Text me' />
        <h1>{name}{poss}{tele}</h1>
        <button>Submit</button>
        <button onClick={ClearData}>Clear Data</button>
      </form>
    </div>
  )
}

export default ControlComponents
