import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';

/* 
Steps to load Dynamic Data:
1. declare an state
2. declare a useEffect
3. call setState and send data there
4. Connect state
5. Show the data by mapping
*/

function App() {
  return (
    <div className="App">
      <ExternalUser></ExternalUser>
    </div>
  );
}

function ExternalUser(){
  const [users, setUsers]= useState([]);
  /* We declared state to keep the data after loading */
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>setUsers(data));
  },[]);
  return (
    <div>
      <h1>External User</h1>
      <h3>Total User: {users.length}</h3>
      <table id="customers">
    <tr>
      <th>Name</th>
      <th>Email</th>
      <th>Phone</th>
    </tr>
  </table>
      {users.map(user=><User name={user.name} email={user.email} phone={user.phone}></User>)}
    </div>
  )
}
function User(props){
  return(
    <table id='customers2'>
  <tr>
    <td>{props.name}</td>
    <td>{props.email}</td>
    <td>{props.phone}</td>
  </tr>
  </table>
  
  );
}


export default App;
