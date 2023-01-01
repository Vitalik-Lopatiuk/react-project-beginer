import "./index.scss";
import Button from "./components/button/Button";
import Input from "./components/input/Input";
import { useState } from "react";

function App() {
  const [result, setResult] = useState('');
  const clearInputAll = () => {
    setResult("");
  };

  const heandleBtn = (event) => {

    setResult(result.concat(event.target.value));
  };


  const evalExample = () => {
    setResult(eval(result).toString());
  };


  const clearLastElement = () =>{
    setResult(result.toString().slice(0, -1));
  }
  return (
    <div className="App">

      <div className="wrapper">
        <Input result={result} />
        <Button
          clearInputAll={clearInputAll}
          heandleBtn={heandleBtn}
          evalExample={evalExample} 
          clearLastElement ={clearLastElement}
          
        />
      </div>
    </div>
  );
}

export default App;
