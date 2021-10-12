import logo from './logo.svg';
import React,{useState} from "react";
import './App.css';
import BoxGenerator from './components/boxgenerator';
import Display from './components/boxdisplay';
import NinjaBoxGenerator from './components/ninjaboxgenerator';

function App() {
  
  const [boxcolorarray,setboxcolorarray]=useState([])

 
  // Ninja Bonus: Add a second input that takes in an integer. 
  //    This integer will allow the user to specify the height and width of the generated box.
  //    Using an object to hold both the integer and the color together
  const setColorArray=(color,size)=>
  {
    setboxcolorarray([...boxcolorarray,{ 
      color: color,
      // be sure to add the px to the string so it can update the style correctly
      size: size,
    }])
  }


  return (
    <div className="App">
 {/*     <BoxGenerator onColorAdd={setColorArray}></BoxGenerator>
     <Display boxcolorarray={boxcolorarray}></Display> */}
     <NinjaBoxGenerator onColorAdd={setColorArray}></NinjaBoxGenerator>
     <Display boxcolorarray={boxcolorarray}></Display>
    </div>
  );
}

export default App;
