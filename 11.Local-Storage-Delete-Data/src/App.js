import './App.css';
import React, { useEffect, useState } from 'react';
import User from './component/User/User';
import Sum from './component/Sum/Sum';
function App() {
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch('data.json')
    .then(res=>res.json())
    .then(data=>setUsers(data));
  },[]);
  return (
    <div className='sum'>
    <Sum></Sum>
    <div className="App">
      {
        users.map(user=><User user={user} key={user.id}></User>)
      }
    </div>
    </div>
  );
}

export default App;
