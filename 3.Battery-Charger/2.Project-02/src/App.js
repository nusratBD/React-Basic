import './App.css';
import React, { useState } from 'react';
function App() {
  return (
    <div className="App">
    <Battery name='Samsung Galaxy'></Battery>
    <Battery name='iPhone7'></Battery>
    <Battery name='OPPO'></Battery>
    </div>
  );
}
const battery = {
  backgroundColor: 'skyblue',
  margin: '10px',
  padding: '10px',
  border:'2px solid red',
  borderRadius: '10px'
}
function Battery(props){
  const [boost, setBoost] = useState(1);
  const boostCharge = () =>{
  const newBoost = boost*2;
  setBoost(newBoost);
  }
  return(
    <div style={battery}>
      <h1>Phone Type: {props.name}</h1>
      <h3>Charge Amount:{boost}</h3>
      <button onClick={boostCharge}>Boost Charge</button>
      </div>
  )
}
export default App;
