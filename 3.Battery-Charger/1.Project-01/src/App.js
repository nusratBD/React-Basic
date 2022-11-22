import './App.css';
import React, { useState } from 'react';
function App() {
  return (
    <div className="App">
    <Battery name='Samsung Galaxy'></Battery>
    <Battery name='iPhone 7'></Battery>
    <Battery name='Oppo 9'></Battery>
    </div>
  );
}
const batteryStyle = {
  backgroundColor: 'salmon',
  padding:'10px',
  margin:'20px',
  border:'2px solid green',
  borderRadius: '10px'
  
}
function Battery(props){
  const [down, setDown] = useState(100);
  const batteryDown = ()=>{
    if(down>0){
      const newDown = down - 10;
      setDown(newDown);
    }
  }
  return (
    <div style={batteryStyle}>
      <h1>Phone Name: {props.name}</h1>
      <h3>Charge Amount: {down}</h3>
      <button onClick={batteryDown}>Battery Down</button>
    </div>
  )
}

export default App;
