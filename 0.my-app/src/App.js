import logo from './logo.svg';
import './App.css';
const x = 200;
const self = {
  name: 'Nusrat Hurain',
  age: 25,
  profession: 'Software Engineer'
}
const testStyle = {
    color: 'white',
    fontWeight: 200
}
function App() {
  return (
    <div className="App">
      {/* Similar in Look, Similar in Data */}
      <Person></Person>
      <Person></Person>
    </div>
  );
}
//Function is nothing but a component
function Person(){
  // return <div>
  //   <h1>Hello, Nusrat</h1>
  //   <p>Profession: Software Engineer</p>
  // </div>

  //Indentaion is understandable
  return(
    <div className="hello">
      <h1>Hello, Nusrat</h1>
      <p>Profession: Software Engineer</p>
  </div>
  )
}

export default App;
