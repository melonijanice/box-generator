import React, { useState } from 'react';

const BoxGenerator = (props) => {
    const [color,setcolor]=useState("")
  const submitHandler=(event)=>
  {
      event.preventDefault();
      props.onColorAdd(color);  
      if (event.type==="submit")
      {
        setcolor("")
        console.log(event)
      }

  }
  const addColorHandler=(event)=>
  {
    setcolor(event.target.value);
  }
  
  return (
    <div>
      <form onSubmit={ submitHandler } style={{ margin: "20px" }}>
        <div>
          <label>Color</label>
          <input
            id="colorinput"
            type="text" 
            name="color"
            onChange={addColorHandler} value={color}
          />
        </div>
        <button>Add</button>
      </form>

  </div>
  )
}

export default BoxGenerator;