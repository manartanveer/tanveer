import React, { useState } from 'react'

function ObjectInState() {
    const [user, setUser] = useState ({
        name: 'shahid',
            address:{
             city : "karachi",
            country : "Pakistan",
           
        }
    })
    const UpdateName=(val)=>{
        user.name= val;
        console.log(val);
        console.log(user);
        setUser({...user});
    }
    const ChangeCity=(city)=>{
        user.address.city =city;
        setUser({...user,address:{...user.address,city}})
        
    }
    
  return (  
    <div>
       <h1>{user.name}</h1>
      <h1> Name : {user.address.city}</h1>
      <input type="text" placeholder='Enter the userName' onChange={(event)=>UpdateName(event.target.value)} />
      <h1> address2 : {user.address.country}</h1>
      <br /><br />
      <input type="text" placeholder='Enter City' onChange={(event)=>ChangeCity(event.target.value)} />
     
      
    </div>
  )
}

export default ObjectInState
