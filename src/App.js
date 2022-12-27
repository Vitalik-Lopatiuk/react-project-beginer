import { useState } from 'react';
import './index.scss';

function App() {
  const [count , setCount] = useState(0)
  const incrementBtn = () =>{
    setCount(count + 1)
  }

  const decrementBtn = () =>{
    setCount(count - 1)
  }

  return (
    <div className="App">
      <div>
        <h2>Счетчик:</h2>
        <h1>{count}</h1>
        <button onClick={decrementBtn} className="minus">- Минус</button>
        <button onClick={incrementBtn} className="plus">Плюс +</button>
      </div>
    </div>
  );
}

export default App;
