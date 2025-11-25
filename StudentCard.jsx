import React from 'react'
import card from'./card.module.css' 

function StudentCard() {
  return (
    <div>
      <div>
        <h1 className={card.heading}>Student Card</h1>
        <h2>App.jsx :heading</h2>
        <img className= {card.img} src="https://plus.unsplash.com/premium_vector-1720824711826-bdfbcc05cfe9?q=80&w=834&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <div>
            <h1>Maar</h1>
            <h2>BSCS</h2>
        </div>
      </div>
    </div>
  )
}

export default StudentCard
