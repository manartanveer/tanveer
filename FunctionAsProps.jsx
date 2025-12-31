import React from 'react'

function FunctionAsProps({ShowName,name, possword}) {
    
     
  return (
    <div>
      <h1>FunctionAsProp</h1>
      <button onClick={()=>ShowName(name)}>ButtonProp</button>
      <button onClick={possword}>Props</button>
    </div>
  )
}

export default FunctionAsProps
