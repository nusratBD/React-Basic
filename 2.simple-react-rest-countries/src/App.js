import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
function App() {
  return (
    <div className="App">
      <LoadCountries></LoadCountries>
    </div>
  );
}
//Step 01: Create a Component
function LoadCountries(){
  //Step 02: Declare a state
  const [countries, setCountries] = useState([]);
  //Step 03: Declare useEffect
  useEffect(()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res=>res.json())
    .then(data=>setCountries(data));
  },[])
  return(
    <div>
      <h1>Visiting Every Countries of the World!!!</h1>
      {/* Step 04: Show loaded data */}
      <h3>Available Countries: {countries.length}</h3>
    </div>
  )
}

export default App;
