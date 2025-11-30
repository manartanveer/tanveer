
import React, { useState } from 'react'

function UpdatingArray() {
    const [city,setCity]= useState([
        'lahore', 'Gujranwala', 'Gujrat'
    ]);
    const ChangeCity=(newCity)=>{
        const updated = [...city];
        updated[updated.length-1] = newCity;
        setCity(updated);
        console.log("Updated city".updated)
        
    }
    const [emp, setEmp] = useState ([
        { name : "shahid", salary : 25000},
        { name : "shahid", salary : 25000},
        { name : "shahid", salary : 30000},
    ]);
    const setSalary = (newSalary) => {
    const updatedEmp = [...emp];
    updatedEmp[updatedEmp.length - 2].salary = newSalary;
    setEmp(updatedEmp);
    console.log("Updated Employees:", updatedEmp);
  
    }

   return (
    <div>
      <h1>Cities:</h1>
      {city.map((item, index) => (
        <h2 key={index}>{item}</h2>
      ))}

      <input
        type="text"
        placeholder="Write City"
        onChange={(event) => ChangeCity(event.target.value)}
      />

      <hr />

      <h1>Employees:</h1>
      {emp.map((item, index) => (
        <h2 key={index}>
          Name: {item.name} — Salary: {item.salary}
        </h2>
      ))}

      <input
        type="text"
        placeholder="Enter Salary"
        onChange={(event) => setSalary(event.target.value)}
      />
    </div>
  );
}

export default UpdatingArray;