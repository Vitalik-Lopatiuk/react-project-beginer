import "./index.scss";
import "./components/burger/Burger.scss";
import Button from "./components/button/Button";
import Input from "./components/input/Input";
import Burger from "./components/burger/Burger";
import { useState } from "react";

function App() {
  const [result, setResult] = useState("");
  const [pow , setPow] = useState()
  const [burger, setBurger] = useState(false);
  const clearInputAll = () => {
    setResult("");
  };

  const heandleBtn = (event) => {
    setResult(result.concat(event.target.value));
    
  };

  const evalExample = () => {
    setResult(eval(result).toString());
  };

  const clearLastElement = () => {
    setResult(result.toString().slice(0, -1));
  };

  const hideBurger = () => {
    setBurger(false);
  };

  const showBurger = () => {
    setBurger(true);
  };

  const sqrtyBtn = () => {
    setResult(Math.sqrt(result));
  };

  const square = () => {
    
    setResult(Math.pow(result , result));
  };

  return (
    <div className="App">
      <div className="wrapper">
        <Input result={result} />
        {burger ? (
          <Burger
            hideBurger={hideBurger}
            clearInputAll={clearInputAll}
            heandleBtn={heandleBtn}
            evalExample={evalExample}
            clearLastElement={clearLastElement}
            burger={burger}
            sqrtyBtn={sqrtyBtn}
            square={square}
          />
        ) : (
          <Button
            clearInputAll={clearInputAll}
            heandleBtn={heandleBtn}
            evalExample={evalExample}
            clearLastElement={clearLastElement}
            burger={burger}
            showBurger={showBurger}
          />
        )}
      </div>
    </div>
  );
}

export default App;
