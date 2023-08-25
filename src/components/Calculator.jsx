import DisplayAnswer from "./DisplayAnswer";
import ElementContainer from "./ElementContainer";
import "../styles/calculator.css";
import { useState } from "react";

export default function Calculator() {
  const [numberArr, setNumberArr] = useState([]);
  const [operatorArr, setOperatorArr] = useState([]);
  const [elemArr, setElemArr] = useState([]);

  function handleNumberClick(element) {
    setOperatorArr([]);
    setNumberArr([...numberArr, element]);
    setElemArr([...elemArr, numberArr]);
    console.log(elemArr);
    console.log(numberArr);
  }

  function handleOperatorClick(element) {
    setNumberArr([]);
    setOperatorArr([...operatorArr, element]);
    setElemArr([...elemArr, operatorArr]);
    console.log(elemArr);
  }

  return (
    <>
      <div className="calculator">
        <DisplayAnswer />
        <ElementContainer
          handleNumberClick={handleNumberClick}
          handleOperatorClick={handleOperatorClick}
        />
      </div>
    </>
  );
}
