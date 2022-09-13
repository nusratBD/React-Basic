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
  const names = ['Nusrat', 'Hurain', 'Nuha', 'Tithi', 'Dipti', 'Sweety', 'Koly'];
  const salaries = [2000000, 3000000, 5000000, 4000000, 7000000];
  const profession = ['Software Engineer', 'Electrical Engineer', 'AI expert', 'Web Developer']
  return (
    <div className="App">
      {/* Similar in Look, Similar in Data : without props*/}
      {/* Similar in look different with data: with props  */}
      <Person name="Nusrat Hurain" profession="Software Engineer"></Person>
      <Person name="Nusrat Hurain Nuha" profession="Web Developer"></Person>

      {/* Component props from array */}
      <Name name={names[0]} profession={profession[1]} salary={salaries[2]}></Name>
      <Name name={names[3]}></Name>
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

//
function Name(props){
    return (
      <>
      <h1>Bio Data - {props.name}</h1>
       <div className="names">
        <div className="name">
        <h1>Name: '{props.name}'</h1>
      </div>
      <div className="name">
        <h1>Profession: {props.profession}</h1>
      </div>
      <div className="name">
        <h1>Salary {props.salary}</h1>
      </div>
      </div></>
     
    );
}

export default App;
