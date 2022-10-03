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


      {/* 01: Show Single Data  */}
      {/* {
        countries.map(country=><p>{country.name.common}</p>)
      } */}


     {/*  02. Show multiple data by using props: step-02 */}
     {
      countries.map(country=><Country name={country.name.common} population={country.population}></Country>)
     }
    </div>
  )
}
//02. Show multiple data by using props: step-01
function Country(props){
  return(
    <div>
      <h3 style={{color: 'green'}}>Name: <small style={{color: 'indigo'}}>{props.name}</small></h3>
      <h3 style={{color: 'blue'}}>Population: <small style={{color: 'magenta'}}>{props.population}</small></h3>
    </div>
  )
}

export default App;
