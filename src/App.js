import logo from './logo.svg';
import './App.css';
import {useState, useRef} from "react";
import {Form} from "./components/Form"

function App() {
  let test = useRef(1) 
  // test {current : 1}
  const [dummy , setDummy ]= useState(1)
  return (
    <div className="App">
    
      <Form />
    </div>
  );
}

export default App;
/*
1. variable , save it own state
2.change in variable , sholun't cause a re render  
useRef.current.scrollIntoView({
  behaviour:"smooth"
}) -- read 

<button onClick={()=>{
        test.current = test.current+1
        console.log(test.current)
      }}> Increment </button>

      <button onClick={()=>{
        setDummy((r)=>r+1)
        console.log(test)
      }}>rerender </button>

*/