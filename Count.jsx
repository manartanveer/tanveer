import React, { useState } from 'react'

function Count() {
    const [count, setCount] = useState(20);
  return (
    <div className='bg-red-300'>
      <h1>{count}</h1>
      <button className='bg-green-400' onClick={()=>setCount(count + 2)}>Count vaule</button>

    </div>
  )
}

export default Count
