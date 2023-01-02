import { useState } from "react";
import "./index.scss";
import Input from "./components/input/Input";
import AddButton from "./components/button/addButton/AddButton";
function App() {
  const [list, setList] = useState([]);

  const inputValue = (e) => {
    setList(e.target.value)
  };

  return (
    <div className="App flex items-center justify-center h-screen text-center">
      <div className="wrapper flex">
        <Input />
        <AddButton />
      </div>
    </div>
  );
}

export default App;
