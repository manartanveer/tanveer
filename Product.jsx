import React from 'react'
import './myStyle.css'

function Product() {
  return (
    <div className='container'>
      
      <div>
        <div className='card'>
            <img className='img-style' src="https://plus.unsplash.com/premium_photo-1668005190411-1042cd38522e?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <div className='Product'><h2>Wooden lamp</h2></div>
            <div><h2>Price : 200kr</h2></div>
        </div>
      </div>
      
      
      <br />
            <div>
        <div className='card'>
            <img className='img-style' src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <div className='Product'><h2>Leather shoes</h2></div>
             <div><h2>Price : 400kr</h2></div>
        </div>
      </div>
      
     
    </div>
  )
}

export default Product
