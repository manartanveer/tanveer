
import React, { useState } from 'react'

function DerivedState() {
    const [ group, setGroup] = useState([]);
    const [user, setUser] = useState("");
    const AddToGroup=()=>{
        setGroup([...group, user]);
    }
    const total = group.length;
    const Unique = [new Set(group)].length;
    const last = group[group.length-1]
  return (
    <div>
       <h1>DerivedState</h1>
       <h2 className='bg-yellow-300 color-red text-red-500'>Total Entries :{total}</h2>
       <h2 className='bg-yellow-300 color-red text-red-500'>Unique Enteries:{Unique} </h2>
       <h2 className='bg-yellow-300 color-red text-red-500'>Last Entries {last}</h2>
       <input className='text-green-500' type="text" placeholder='Enter user' onChange={(event)=>setUser(event.target.value)} />
       <button onClick={AddToGroup}>AddUser</button>
       {
        group.map((item,index)=>(
            <h1 key={index}>{item}</h1>
        ))
       }
    </div>
  )
}

export default DerivedState
