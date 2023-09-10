import Operator from "./Operator";
import Number from "./Number";
import "../styles/elementcontainer.css";
import { useState } from "react";

export default function ElementContainer({
  handleNumberClick,
  handleOperatorClick,
  handleClearClick,
  deleteLastElement,
  calculate,
}) {
  const [theClass, setTheClass] = useState("orange");
  function krisWale() {
    let c = theClass == "orange" ? "green" : "orange";
    setTheClass(c);
  }
  return (
    <>
      <div className="container">
        <Operator element={"AC"} onElementClick={handleClearClick} />
        <Operator element={"del"} onElementClick={deleteLastElement} />
        <Operator element={"KW"} onElementClick={krisWale} />
        <Operator
          className={theClass}
          element={"÷"}
          onElementClick={handleOperatorClick}
        />
        <Number element={"7"} onElementClick={handleNumberClick} />
        <Number element={"8"} onElementClick={handleNumberClick} />
        <Number element={"9"} onElementClick={handleNumberClick} />
        <Operator
          className={theClass}
          element={"x"}
          onElementClick={handleOperatorClick}
        />
        <Number element={"4"} onElementClick={handleNumberClick} />
        <Number element={"5"} onElementClick={handleNumberClick} />
        <Number element={"6"} onElementClick={handleNumberClick} />
        <Operator
          className={theClass}
          element={"-"}
          onElementClick={handleOperatorClick}
        />
        <Number element={"1"} onElementClick={handleNumberClick} />
        <Number element={"2"} onElementClick={handleNumberClick} />
        <Number element={"3"} onElementClick={handleNumberClick} />
        <Operator
          className={theClass}
          element={"+"}
          onElementClick={handleOperatorClick}
        />
        <Number
          className="span"
          element={"0"}
          onElementClick={handleNumberClick}
        />
        <Number element={"."} onElementClick={handleNumberClick} />
        <Operator
          className={theClass}
          element={"="}
          onElementClick={calculate}
        />
      </div>
    </>
  );
}
