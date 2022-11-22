import './App.css';
import React, { useState } from 'react';
import Dhaka from './component/Dhaka/Dhaka';
function App() {
  const [price, setPrice] = useState(1000);
  const priceUp = () =>{
    const newPrice = price + 50;
    setPrice(newPrice);
  }
  return (
    <div className="App">
      <h1>OPPO Watch Gallery</h1>
      <h3>Price: {price}</h3>
      <button onClick={priceUp}>Price Up</button>
      <Dhaka price={price}></Dhaka>
    </div>
  );
}

export default App;
