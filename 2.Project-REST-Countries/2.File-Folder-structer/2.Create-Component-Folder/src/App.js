import './App.css';
import {useEffect, useState} from 'react';
function App() {
  return (
    <div className="App">
      <LoadCountries></LoadCountries>
    </div>
  );
}
function LoadCountries(){
  const [countries, setCountries] = useState([]);
  useEffect(()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res=>res.json())
    .then(data=>setCountries(data));
  },[])
  return (
    <div>
      <h1>Welcome to world tour!!!</h1>
      <h2>Available Countries: <small>{countries.length}</small></h2>
      {
        countries.map(country=><Country name={country.name.common} population={country.population}></Country>)
      }
    </div>
  )
}
function Country(props){
  return (
    <div>
      <h3>Name: <small>{props.name}</small></h3>
      <h3>Name: <small>{props.population}</small></h3>
    </div>
  )
}

export default App;
