import React, { useRef } from 'react'

function InputUseRef() {
    const inputType = useRef();

    function NameHandler(){
        console.log(inputType);
        inputType.current.placeholder = "Enter text";
        inputType.current.focus();
        inputType.current.style.color = "green";
        inputType.current.value = "Tanveer";
    }
    function HideShow(){
        inputType.current.style.display = "none";
    }
  return (
    <div>
      <h1>useRef</h1>
      <input ref = {inputType} type="text" />
      <button onClick={NameHandler}>Click me</button>
      <button onClick={HideShow}>HideShow</button>
    </div>
  )
}

export default InputUseRef
