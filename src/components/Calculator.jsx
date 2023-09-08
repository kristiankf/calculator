import DisplayAnswer from "./DisplayAnswer";
import ElementContainer from "./ElementContainer";
import "../styles/calculator.css";
import { useState } from "react";

export default function Calculator() {
  const [elemArr, setElemArr] = useState([]);

  //  add number to clicked element list
  function handleNumberClick(element) {
    setElemArr((elemArr) => [...elemArr, { elem: element, type: "number" }]);
    console.log(elemArr);
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
    console.log(elemArr);
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
      for (let i = 0; i < arr.length; i++) {
        let firstnum = [];
        let secondnum = [];
        let rightindex = arr.length;
        let leftindex = 0;
        let finalnum;

        if (arr[i].elem == "÷") {
          console.log(i, arr[i]);
          for (let j = i - 1; j >= 0; j--) {
            if (arr[j].type == "number") {
              console.log(arr[j].elem);
              firstnum.unshift(arr[j].elem);
              console.log(firstnum);
            } else {
              leftindex = j + 1;
              // firstnum.join();
              console.log(leftindex, firstnum);
              break;
            }
          }
          for (let j = i + 1; j < arr.length; j++) {
            if (arr[j].type == "number") {
              console.log(arr[j].elem);
              secondnum.push(arr[j].elem);
              console.log(secondnum);
            } else {
              rightindex = j;
              // secondnum.join();
              console.log(rightindex, secondnum);
              break;
            }
          }
          console.log(firstnum.join(""));
          console.log(secondnum.join(""));
          finalnum =
            parseFloat(firstnum.join("")) / parseFloat(secondnum.join(""));
          console.log("THE ANSWER IS " + finalnum);
          arr.splice(leftindex, rightindex - leftindex, {
            elem: `${finalnum}`,
            type: "number",
          });
          let dupli = arr.map((item) => {
            return item;
          });
          console.log(arr);
          console.log(dupli);
          console.log(arr.length);
          i = 0;
        }
      }

      // MULTIPLICATION, LOOPS THROUG TO FIND ALL MULTIPLICATION OPERATORS
      for (let i = 0; i < arr.length; i++) {
        let firstnum = [];
        let secondnum = [];
        let rightindex = arr.length;
        let leftindex = 0;
        let finalnum;

        if (arr[i].elem == "x") {
          console.log(i, arr[i]);
          for (let j = i - 1; j >= 0; j--) {
            if (arr[j].type == "number") {
              console.log(arr[j].elem);
              firstnum.unshift(arr[j].elem);
              console.log(firstnum);
            } else {
              leftindex = j + 1;
              // firstnum.join();
              console.log(leftindex, firstnum);
              break;
            }
          }
          for (let j = i + 1; j < arr.length; j++) {
            if (arr[j].type == "number") {
              console.log(arr[j].elem);
              secondnum.push(arr[j].elem);
              console.log(secondnum);
            } else {
              rightindex = j;
              // secondnum.join();
              console.log(rightindex, secondnum);
              break;
            }
          }
          console.log(firstnum.join(""));
          console.log(secondnum.join(""));
          finalnum =
            parseFloat(firstnum.join("")) * parseFloat(secondnum.join(""));
          console.log("THE ANSWER IS " + finalnum);
          arr.splice(leftindex, rightindex - leftindex, {
            elem: `${finalnum}`,
            type: "number",
          });
          let dupli = arr.map((item) => {
            return item;
          });
          console.log(arr);
          console.log(dupli);
          console.log(arr.length);
          i = 0;
        }
      }

      // ADDITION, LOOPS THROUGH TO FIND ALL ADDITION OPERATIONS
      for (let i = 0; i < arr.length; i++) {
        let firstnum = [];
        let secondnum = [];
        let rightindex = arr.length;
        let leftindex = 0;
        let finalnum;

        if (arr[i].elem == "+") {
          console.log(i, arr[i]);
          for (let j = i - 1; j >= 0; j--) {
            if (arr[j].type == "number") {
              console.log(arr[j].elem);
              firstnum.unshift(arr[j].elem);
              console.log(firstnum);
            } else {
              leftindex = j + 1;
              // firstnum.join();
              console.log(leftindex, firstnum);
              break;
            }
          }
          for (let j = i + 1; j < arr.length; j++) {
            if (arr[j].type == "number") {
              console.log(arr[j].elem);
              secondnum.push(arr[j].elem);
              console.log(secondnum);
            } else {
              rightindex = j;
              // secondnum.join();
              console.log(rightindex, secondnum);
              break;
            }
          }
          console.log(firstnum.join(""));
          console.log(secondnum.join(""));
          finalnum =
            parseFloat(firstnum.join("")) + parseFloat(secondnum.join(""));
          console.log("THE ANSWER IS " + finalnum);
          arr.splice(leftindex, rightindex - leftindex, {
            elem: `${finalnum}`,
            type: "number",
          });
          let dupli = arr.map((item) => {
            return item;
          });
          console.log(arr);
          console.log(dupli);
          console.log(arr.length);
          i = 0;
        }
      }

      // SUBTRACTION, LOOPS THROUGH TO FIND ALL SUBTRACTION OPERATIONS
      for (let i = 0; i < arr.length; i++) {
        let firstnum = [];
        let secondnum = [];
        let rightindex = arr.length;
        let leftindex = 0;
        let finalnum;

        if (arr[i].elem == "-") {
          console.log(i, arr[i]);
          for (let j = i - 1; j >= 0; j--) {
            if (arr[j].type == "number") {
              console.log(arr[j].elem);
              firstnum.unshift(arr[j].elem);
              console.log(firstnum);
            } else {
              leftindex = j + 1;
              // firstnum.join();
              console.log(leftindex, firstnum);
              break;
            }
          }
          for (let j = i + 1; j < arr.length; j++) {
            if (arr[j].type == "number") {
              console.log(arr[j].elem);
              secondnum.push(arr[j].elem);
              console.log(secondnum);
            } else {
              rightindex = j;
              // secondnum.join();
              console.log(rightindex, secondnum);
              break;
            }
          }
          console.log(firstnum.join(""));
          console.log(secondnum.join(""));
          finalnum =
            parseFloat(firstnum.join("")) - parseFloat(secondnum.join(""));
          console.log("THE ANSWER IS " + finalnum);
          arr.splice(leftindex, rightindex - leftindex, {
            elem: `${finalnum}`,
            type: "number",
          });
          let dupli = arr.map((item) => {
            return item;
          });
          console.log(arr);
          console.log(dupli);
          console.log(arr.length);
          i = 0;
        }
      }
    }

    console.log(arr);
    setElemArr([...arr]);
  }

  return (
    <>
      <div className="calculator">
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
