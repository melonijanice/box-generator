import React from 'react';

const Display = (props) => {
  // using the getter that were passed from my parent (App.js) component
  const { boxcolorarray } = props;
  console.log("Displaying Color")
  console.log([...boxcolorarray])
  

  /* 
    Display the values held in state - 
      the boxColorArray will update when the form is submitted 
    When state is updated, it will cause this component to re-render this content
  */
    return (
        <div>
          {
            boxcolorarray.map((item, index) => (
              <div key={index} style={{ 
                  display: "inline-block",
                  margin: "10px",
                  height: item.size, 
                  width: item.size, 
                  backgroundColor: item.color
                  }}>
              </div>
            ))
          }
        </div>
      );
}

export default Display;