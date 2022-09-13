import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  return (
    <div className="App">
      <Counter></Counter>
    </div>
  );
}

function Counter(){
  /* const x = useState(20);
  console.log(x); */
 /*  
 output: (2) [20, ƒ]
 useState returns an array of two value. One is the giving useState value and 
 another is a function.
 */
const [state, setState] = useState(20);
/* Here state=value, setState = function */
const increment = () =>{
  // const newState = state + 1;
  // setState(newState);
  setState(state + 1);
}
const decrement = ()=>{
  if(state>0){
    setState(state - 1);
  }
}
    return <div>
      <h1>Count: {state}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement} className="decrement">Decrement</button>
    </div>
}


export default App;
