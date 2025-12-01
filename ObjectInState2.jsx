
import React, { useState } from 'react'

function ObjectInState() {
    const [user, setUser] = useState({
        Name : "Shahid",
            address : {
                city : "Lahore",
                country :"Uk",
                
            }      
    })
     
     const UpdateUser=(val)=>{
        user.Name=val;
        setUser({...user});
        console.log(val);
        console.log(user);
     }
     const UpdateSubObject=(city)=>{
        user.address.city= city;
        console.log(user);
        setUser({...user,address:{...user.address,city}})

     }
  return (
    <div>
      <h1>Updating SubjectObject</h1>
      <input type="text" placeholder='UpdateUser' onChange={(event)=>UpdateUser(event.target.value)} />
      <h1>Name : {user.Name}</h1>
      <h1>city: {user.address.city}</h1>
      <h1>country : {user.address.country}</h1>
      <br /><br />
      <input type="text" placeholder='Enter subObject' onChange={(event)=>UpdateSubObject(event.target.value)} />
    </div>
  )
}

export default ObjectInState
