import React, { useState } from 'react';

function FormWithCRUD() {
  const [data, setData] = useState("");
  const [dataList, setDataList] = useState([]);

  const handleDataChange = (event) => {
    setData(event.target.value);
  };

  const handleSubmit = () => {
    if (data.trim() === '') {
      alert("Enter the value");
      return;
    }
    setDataList([...dataList, data]);
    setData('');
  };

  const deleteData = (index) => {
    setDataList(dataList.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h1>{data}</h1>

      <input
        type="text"
        placeholder="Enter email"
        value={data}
        onChange={handleDataChange}
      />

      <button onClick={handleSubmit}>Submit</button>

      <h2>Submitted Data</h2>
      <ul>
        {dataList.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => deleteData(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FormWithCRUD;
