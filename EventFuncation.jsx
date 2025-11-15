import React from 'react'

function EventFuncation() {
   
        const City = (CityName)=>{
            alert(CityName)
    }

   
  return (
    <div>
      <h1>Event Function</h1>
      <button onClick={()=>City("Isblamad")}>click</button>
    </div>
  )
}

export default EventFuncation
