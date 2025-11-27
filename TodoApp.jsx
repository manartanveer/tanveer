import React, { useState } from 'react'

function Todo() {
    const [intial, setInitial] = useState("");
    const [data, setData] = useState([]);
    


    const getInput=(event)=>{
        console.log(event.target.value);
        setInitial(event.target.value);
    }

    const getData=()=>{
        console.log(intial);
        let store = [...data,intial]
        setData(store);
    }
     const clearData = () => {
    console.clear(); 
    alert("All data cleared!");
    setInitial("");
  }
   
  return (
    <div>
      <div>
        <input type="text" placeholder='Enter text' value={intial} onChange={getInput} />
        <button onClick={getData}>GetData</button>
        <button onClick={clearData}>clear data</button>
       
        
        
      </div>
      {data.map((curValue, )=>{
        <div>
            <h1>class</h1>
            <p>{curValue}</p>
        </div>
      }

    )}
    </div>
  )
}

export default Todo
