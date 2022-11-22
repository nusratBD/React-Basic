import { useEffect, useState } from 'react';
import './App.css';
import Posts from './component/Posts/Posts';
function App() {
  const [posts, setPosts] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=>res.json())
    .then(data=>setPosts(data))
  },[])
  return (
    <div className="App">
      {
        posts.map(post=><Posts posts={post}></Posts>)
}
    </div>
  );
}

export default App;
