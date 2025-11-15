import React from 'react'

function CheckBox() {

     const [hobby, setHobby] = useState(['awais', 'tahir','naveed']);
  const Hobbies = (event)=>{
    console.log(event.target.value , event.target.checked);
    
  return (
    <div>
       <h1>CheckBox</h1>
       <h1>InputField</h1>
      <input type="checkbox" onChange={Hobbies} id = "Coockies" />
      <label htmlFor="Coockies">Coockies</label>
      <br />
      <input type="checkbox" onChange={Hobbies} id = "Music" />
      <label htmlFor="Music">Music</label>
      <br />
      <input type="checkbox" onChange={Hobbies} id = "Travelling" />
      <label htmlFor="Travelling">Travelling</label>
      <br />
       <input type="checkbox" onChange={Hobbies} id = "Gardening" />
      <label htmlFor="Gardening">Travelling</label>
      <br />
      <input type="checkbox" onChange={Hobbies} id = "Reading" />
      <label htmlFor="Reading">Reading</label>
      <br />
      <h1>{hobby.toString()}</h1>
    </div>
  )
}
   


export default CheckBox
