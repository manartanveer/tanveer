import React, { useState } from 'react'

const Form = () => {
    const [name , setName] = useState("");
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");
    const [ConfirmPass , setConfirmPass] = useState("");
  return (
    <div>
      <form>
        <div>
            <p>Name</p>
            <input type="text" onChange={(event)=>setName(event.target.value)} />
            <p>{name?"":"Name is required"}</p>
        </div>
        <div>
            <p>Email</p>
            <input type="Email" onChange={(event)=>setEmail(event.target.value)} /> 
             <p>{name?"":"Email is required"}</p>
        </div>
        <div>
            <p>Password</p>
            <input type="Password" onChange={(event)=>setPassword(event.target.value)} /> 
             <p>{name?"":"Possword is required"}</p>
        </div>
        <div>
            <p>ConfirmPass</p>
            <input type="ConfirmPass is required" onChange={(event)=>setConfirmPass(event.target.value)} /> 
             <p>{name?"":"Name is required"}</p>
        </div>
        <div>
            <button>SignUp</button>
        </div>
      </form>
    </div>
  )
}

export default Form
