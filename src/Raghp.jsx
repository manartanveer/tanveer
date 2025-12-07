import React, { useState } from 'react'

function AddDeleteItems() {
    const [item , setItem] = useState([]);
    const [input , setInput] = useState("");
    const AddItem=()=>{
      if(input.trim()==="")
        return;
        setItem([...item,input]);  
    }
    
    const DeleteItem=(index)=>{
      const newitem = item.filter((_,i)=>i!==index);
      setItem(newitem);
    }

  return (
    <div>
       <h1>AddDeleteItems,{item}</h1>
       <input  type="text" placeholder='Enter items'  onChange={(event)=>setInput(event.target.value)} />
       <button onClick={AddItem}>AddItems</button>
       
       
       {
        item.map((item,index)=>(
            <h2 key={index}>{item}
            <button onClick={() => DeleteItem(index)}>DeleteItem</button>
            </h2>
        ))
       }
    </div>
  )
}

export default AddDeleteItems
