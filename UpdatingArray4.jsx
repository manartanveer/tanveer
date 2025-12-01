import React, { useState } from 'react'

function UpdatingArray4() {
    const [city ,setCity] = useState([
        'Lahore', 'Karachi', 'islamabad'
    ]);
    const ChangeCity=(newCity)=>{
       const Updated= [...city];
       Updated[Updated.length-2] = newCity;
       setCity(Updated);
       console.log("Updated City", Updated);
    }
    const [salary, setSalary] =useState([
        {Name : "Shahid", Salary : 25000},
        {Name : "Shahid", Salary : 24000},
        {Name : "Shahid", Salary : 23000},
    ])
    const ChangeSalary=(newSalary)=>{
       const UpdatedSal=[...salary];
       UpdatedSal[UpdatedSal.length-2].Salary = newSalary;
       setSalary(UpdatedSal);
       console.log("Updated Salary",UpdatedSal);
    }
  return (
    <div>
      <h2>UpdatingArray4</h2>
      <input type="text" placeholder='Enter city' onChange={(event)=>ChangeCity(event.target.value)} />
      <hr />
      {
        city.map((item, index)=>
            <h2 key={index}>{item}</h2>
        )

      }
      <hr />
      <input type="text" placeholder='Enter Salary' onChange={(event)=>ChangeSalary(event.target.value)} />
      <hr />
      
         <h1>Salary Updating</h1>
         {salary.map((item,index)=>(
            <h2 key={index}> Name :{item.Name}- Salary: {item.Salary}</h2>
        ))}
      
     
      
     
    </div>
    
  )
}

export default UpdatingArray4
