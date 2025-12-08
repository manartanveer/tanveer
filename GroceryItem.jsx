
import React, { useState } from 'react'

function GroceryItem() {
    const [item, setItem] = useState([]);
    const [list, setList] = useState("");
    const [show, setShow] = useState(false);

  
    
    const AddList=()=>{
        if(list.trim()==="") return;
        setItem([...item,list]);
        setList("");
        setShow(false);
    }
    const showList=()=>{
     alert(item);
     setShow(true);
    } 
    const ClearItems=()=>{
        setItem([]);
        setShow(false);
    }

  return (
    <div>
      <h1 className='text-yellow-500'>GroceryItem:</h1>
      <input type="text" value={list} placeholder='Enter Item' onChange={(event)=>setList(event.target.value)} />
      <button onClick={AddList}>Additem</button>
      <button onClick={showList}>Showlist:</button>
      <button onClick={ClearItems}>Clear</button>
      {
        item.map((item, index)=>(
            <div><h2 key={index}>{item}{show}</h2></div>
        ))
      }
    </div>
  )
}

export default GroceryItem
