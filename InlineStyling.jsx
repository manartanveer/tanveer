import React, { useState } from 'react'

function InlineStyling() {
    const [EmpCard, setEmpCard] = useState (
    {
        border : "20px solid gray",
        width :"400px",
        margin : "20px",
        borderRadius : "20px",
        boxShadow : "5px 5px 5px 5px gray"

    });
    function setTheme(bgcolor, textcolor, bcolor){
        setEmpCard({...EmpCard,backgroundcolor:bgcolor, color : textcolor, bordercolor :bcolor})

    }
  return (
    <div style={EmpCard}>
        <button onClick={()=>setTheme("gray","White","black")}>Gray them</button>
      <h1 style={{color : "gold"}}>Employee Card</h1>
      <img style={{width : "400px", borderTopRightRadius : "20px", borderTopLeftRadius :"20px"

      }} src="https://plus.unsplash.com/premium_vector-1682305576957-c180c857bb50?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
    </div>
  )
}

export default InlineStyling
