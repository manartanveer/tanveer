import React, { useState } from 'react'

function UpdatingArray() {
     const [city , setCity] = useState ([
        
            'Lahore' , 'Karach', 'Gujranwala', 
     ])
     const ChangeCity=(newCity)=>{
         const Updated = [...city];
        Updated[Updated.length-2]= newCity;
        setCity(Updated);
        console.log("Updated city",Updated);
     }
     const [emp, setEmp]=useState([
        
            {Name : "Fayz", Salary :26000},
            {Name : "Nauman", Salary :27000},
            {Name : "Shahad", Salary :24000},
        
     ])
     
     const ChangeSalary=(newSalary)=>{
        const Updatedemp = [...emp];
        Updatedemp[Updatedemp.length-2].salary = newSalary;
        setEmp(Updatedemp);
        console.log("Updated EmpData", Updatedemp);
     }
  return (
    <div>
      <h1>Updating array</h1>
      <input type="text" placeholder='Write City here' onChange={(event)=>ChangeCity(event.target.value)} />
      {
        city.map((item,index)=>(
             <h2 key={index}>{item}</h2>
        )   
        )
      }
      <hr />
       
        <h1>Employees</h1>
       {
        emp.map((item,index) => (
            <h2 key={index}> Name :{item.Name} - Salary :{item.Salary}</h2>
        ))}
       <input type="text" placeholder='Enter Salary' onChange={(event)=>ChangeSalary(event.target.value)} />
    </div>
  )
}

export default UpdatingArray
