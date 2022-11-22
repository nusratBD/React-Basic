import './App.css';
import React, { useEffect, useState } from 'react';
import ToDo from './components/ToDo/ToDo';
function App() {
  const [todos, setTodos] = useState([]);
    useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/todos')
      .then(res=>res.json())
      .then(data=>setTodos(data))
    },[]);
  return (
    <div className="App">
      {
      todos.map(todo=><ToDo todo={todo} key={todo.id}></ToDo>)
      }
    </div>
  );
}

export default App;
