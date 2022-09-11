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
      <header className="App-header">
        <h1>JSX</h1> 
        {/* JSX stands for JavaScript XML.
            JSX allows us to write HTML in React.
            JSX makes it easier to write and add HTML in React. */}
        <img src={logo} className="App-logo" alt="logo" />
        <div className="container">
          <h3>Hey, Nusrat. How are you?</h3>
        </div>
        <div className="test">
          <h2>Benifits of JSX:</h2>
          <p>1. Any Valid JS Expression can be used here.</p>
          <p>Example: {50 + x}</p>
          <p>2. Object Access: Details of '{self.name}'</p>
          <p>Age: {self.age} Profession: {self.profession}</p>
          <p>3. CSS Style</p>
          <p style={testStyle}>Name: {self.name}</p>
          <p style={testStyle}>This CSS style is from react JSX</p>
          <p style={{color: 'red', fontSize: '20px', fontWeight:'bold'}}>4. Inline Style</p>
        </div>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
