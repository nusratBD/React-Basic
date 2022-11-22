import './App.css';
import Bride from './component/Bride/Bride';
import { cosmetics, dress } from './utilities/multiple-export';
import add from './utilities/single-export';
function App() {
  const first = 100;
  const second = 50;
  const total = add(first, second);
  const dressPrice = dress(first, second);
  const cosmeticsPrice = cosmetics(first, second);
  return (
    <div className="App">
      <h1>Your Shoes Price: {total}</h1>
      <h1>Dress Price: {dressPrice}</h1>
      <h2>cosmetics Price: {cosmeticsPrice}</h2>
      <Bride total={dressPrice + cosmeticsPrice}></Bride>
    </div>
  );
}

export default App;
