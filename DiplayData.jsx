import React, { useEffect } from 'react'
import Black from './Black'

function DiplayData({Black,red}) {
    const forBlack=()=>{
        console.log("black value")

    }
    useEffect(()=>{forBlack();

    },[])
    
  return (
    <div>
      <h1 style={{color : "green"}}>{Black}</h1>
      <h2 style={{color : "red"}}>{red}</h2>
      
    </div>
  )
}

export default DiplayData
