import DisplayAnswer from "./DisplayAnswer";
import ElementContainer from "./ElementContainer";
import "../styles/calculator.css";
import { divide, multiply, add, subtract } from "../utils/operations";
import { useState } from "react";

export default function Calculator() {
  const [elemArr, setElemArr] = useState([]);

  //  add number to clicked element list
  function handleNumberClick(element) {
    setElemArr((elemArr) => [...elemArr, { elem: element, type: "number" }]);
    // console.log(elemArr);
  }

  //  add operator to clicked element list... nb you cant add to operators consecurtively
  function handleOperatorClick(element) {
    if (elemArr.length == 0) {
      alert("you cannot begin with an operand");
    } else if ("operator" === elemArr[elemArr.length - 1]?.type) {
      alert("you cannnot select two operators");
    } else {
      setElemArr((elemArr) => [
        ...elemArr,
        { elem: element, type: "operator" },
      ]);
    }
    // console.log(elemArr);
  }

  // Clear list
  function handleClearClick() {
    setElemArr([]);
  }

  //deletes one element from list
  function deleteLastElement() {
    let newArr = elemArr.slice(0, elemArr.length - 1);
    setElemArr(newArr);
  }

  //calculates and serves the answer
  function calculate() {
    let arr = elemArr;

    while (arr.length > 1) {
      // DIVISION FIRST, LOOPS THROUG TO FIND ALL DIVISION OPERATORS
      divide(arr);

      // MULTIPLICATION, LOOPS THROUG TO FIND ALL MULTIPLICATION OPERATORS
      multiply(arr);

      // ADDITION, LOOPS THROUGH TO FIND ALL ADDITION OPERATIONS
      add(arr);

      // SUBTRACTION, LOOPS THROUGH TO FIND ALL SUBTRACTION OPERATIONS
      subtract(arr);

      // consolidating the numbers in the array into one
      let num = [];
      arr.forEach((element) => {
        num.push(element.elem);
      });
      arr.splice(0, arr.length, {
        elem: `${num.join("")}`,
        type: "number",
      });
    }

    // console.log(arr);
    setElemArr([...arr]);
  }

  return (
    <>
      <div className="calculator">
        <h1 className="heading">Kris Wale&apos;s simple calculator</h1>
        <DisplayAnswer displayValue={elemArr} />
        <ElementContainer
          handleNumberClick={handleNumberClick}
          handleOperatorClick={handleOperatorClick}
          handleClearClick={handleClearClick}
          deleteLastElement={deleteLastElement}
          calculate={calculate}
        />
      </div>
    </>
  );
}
