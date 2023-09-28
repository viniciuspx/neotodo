import React, { useState } from "react";
import Display from "./components/Display";
import Input from "./components/Input";

import "./css/App.css";
import Button from "./components/Button";

function App() {
  const [itens, setItens] = useState([]);
  const [input, setInput] = useState("");

  const handleAddItem = (item) => {
    const newItens = [...itens, item];
    setItens(newItens);
  };

  const getInput = () => {
    handleAddItem(input);
  };

  return (
    <React.Fragment>
      <div className="list-header">
       <h2>Todo List</h2>
      </div>
      <div className="main">
        <Input setText={setInput} submit={getInput}/>
        <Display itens={itens} />
      </div>
      <div className="main-button">
        <Button text={"Add"} setText={getInput}></Button>
      </div>
    </React.Fragment>
  );
}

export default App;
