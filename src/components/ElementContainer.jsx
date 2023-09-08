import Operator from "./Operator";
import Number from "./Number";
import "../styles/elementcontainer.css";

export default function ElementContainer({
  handleNumberClick,
  handleOperatorClick,
  handleClearClick,
  deleteLastElement,
  calculate,
}) {
  return (
    <>
      <div className="container">
        <Operator element={"AC"} onElementClick={handleClearClick} />
        <Operator element={"del"} onElementClick={deleteLastElement} />
        <Operator element={"%"} onElementClick={handleOperatorClick} />
        <Operator
          className="orange"
          element={"÷"}
          onElementClick={handleOperatorClick}
        />
        <Number element={"7"} onElementClick={handleNumberClick} />
        <Number element={"8"} onElementClick={handleNumberClick} />
        <Number element={"9"} onElementClick={handleNumberClick} />
        <Operator
          className="orange"
          element={"x"}
          onElementClick={handleOperatorClick}
        />
        <Number element={"4"} onElementClick={handleNumberClick} />
        <Number element={"5"} onElementClick={handleNumberClick} />
        <Number element={"6"} onElementClick={handleNumberClick} />
        <Operator
          className="orange"
          element={"-"}
          onElementClick={handleOperatorClick}
        />
        <Number element={"1"} onElementClick={handleNumberClick} />
        <Number element={"2"} onElementClick={handleNumberClick} />
        <Number element={"3"} onElementClick={handleNumberClick} />
        <Operator
          className="orange"
          element={"+"}
          onElementClick={handleOperatorClick}
        />
        <Number
          className="span"
          element={"0"}
          onElementClick={handleNumberClick}
        />
        <Number element={"."} onElementClick={handleNumberClick} />
        <Operator className="orange" element={"="} onElementClick={calculate} />
      </div>
    </>
  );
}
