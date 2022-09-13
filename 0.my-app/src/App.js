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
      {/* Similar in Look, Similar in Data : without props*/}
      {/* Similar in look different with data: with props  */}
      <Person name="Nusrat Hurain" profession="Software Engineer"></Person>
      <Person name="Nusrat Hurain Nuha" profession="Web Developer"></Person>
    </div>
  );
}
//Function is nothing but a component
function Person(props){
  // console.log(props);//output: {}=>Empty Object
  console.log(props);//output: {name: 'Nusrat Hurain'}
  //output: Nusrat Hurain Nuha
  // return <div>
  //   <h1>Hello, Nusrat</h1>
  //   <p>Profession: Software Engineer</p>
  // </div>

  //Indentaion is understandable
  return(
    <div className="hello">
      <h1>Hello, {props.name}</h1>
      <p>Profession: {props.profession}</p>
  </div>
  )
}

export default App;
