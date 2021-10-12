import React, { useReducer } from 'react';
const initialstate={
    color:"",
    size:50+"px"
}
const reducer=(state,action)=>{
    return {
    ...state,
    [action.type]:action.val
};
}
const NinjaBoxGenerator=(props)=>{
const [state, dispatch] = useReducer(reducer, initialstate);
const submitHandler=(event)=>
  {
      event.preventDefault();
      props.onColorAdd(state.color,state.size);
      if (event.type==="submit")
      {
        state.color="";
        state.size=50+"px"
        
      }

  }
const addColorHandler=(event)=>
  {
    const { name, value } = event.target;
    dispatch({
        type: name,
        val: value
    });
  }
    return(
        <div>
        <form onSubmit={ submitHandler } style={{ margin: "20px" }}>
          <div>
            <label>Color</label>
            <input
              id="colorinput"
              type="text" 
              name="color"
              onChange={addColorHandler} value={state.color}
            />
          </div>
          <div>
            <label>Color</label>
            <input
              id="emailinput"
              type="text" 
              name="size"
              onChange={addColorHandler} value={state.size}
            />
          </div>
          <button>Add</button>
        </form>
  
    </div>
    );
}
export default NinjaBoxGenerator;