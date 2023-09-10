// MULTIPLICATION, LOOPS THROUG TO FIND ALL MULTIPLICATION OPERATORS
export function multiply(arr) {
  for (let i = 0; i < arr.length; i++) {
    let firstnum = [];
    let secondnum = [];
    let rightindex = arr.length;
    let leftindex = 0;
    let finalnum;

    if (arr[i].elem == "x") {
      // console.log(i, arr[i]);
      for (let j = i - 1; j >= 0; j--) {
        if (arr[j].type == "number") {
          // console.log(arr[j].elem);
          firstnum.unshift(arr[j].elem);
          // console.log(firstnum);
        } else {
          leftindex = j + 1;
          // firstnum.join();
          // console.log(leftindex, firstnum);
          break;
        }
      }
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j].type == "number") {
          // console.log(arr[j].elem);
          secondnum.push(arr[j].elem);
          // console.log(secondnum);
        } else {
          rightindex = j;
          // secondnum.join();
          // console.log(rightindex, secondnum);
          break;
        }
      }
      // console.log(firstnum.join(""));
      // console.log(secondnum.join(""));
      finalnum = parseFloat(firstnum.join("")) * parseFloat(secondnum.join(""));
      // console.log("THE ANSWER IS " + finalnum);
      arr.splice(leftindex, rightindex - leftindex, {
        elem: `${finalnum}`,
        type: "number",
      });
      let dupli = arr.map((item) => {
        return item;
      });
      // console.log(arr);
      // console.log(dupli);
      // console.log(arr.length);
      i = 0;
    }
  }
}

// DIVISION FIRST, LOOPS THROUG TO FIND ALL DIVISION OPERATORS
export function divide(arr) {
  for (let i = 0; i < arr.length; i++) {
    let firstnum = [];
    let secondnum = [];
    let rightindex = arr.length;
    let leftindex = 0;
    let finalnum;

    if (arr[i].elem == "÷") {
      // console.log(i, arr[i]);
      for (let j = i - 1; j >= 0; j--) {
        if (arr[j].type == "number") {
          // console.log(arr[j].elem);
          firstnum.unshift(arr[j].elem);
          // console.log(firstnum);
        } else {
          leftindex = j + 1;
          // firstnum.join();
          // console.log(leftindex, firstnum);
          break;
        }
      }
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j].type == "number") {
          // console.log(arr[j].elem);
          secondnum.push(arr[j].elem);
          // console.log(secondnum);
        } else {
          rightindex = j;
          // secondnum.join();
          // console.log(rightindex, secondnum);
          break;
        }
      }
      // console.log(firstnum.join(""));
      // console.log(secondnum.join(""));
      finalnum = parseFloat(firstnum.join("")) / parseFloat(secondnum.join(""));
      // console.log("THE ANSWER IS " + finalnum);
      arr.splice(leftindex, rightindex - leftindex, {
        elem: `${finalnum}`,
        type: "number",
      });
      let dupli = arr.map((item) => {
        return item;
      });
      // console.log(arr);
      // console.log(dupli);
      // console.log(arr.length);
      i = 0;
    }
  }
}

// ADDITION, LOOPS THROUGH TO FIND ALL ADDITION OPERATIONS
export function add(arr) {
  for (let i = 0; i < arr.length; i++) {
    let firstnum = [];
    let secondnum = [];
    let rightindex = arr.length;
    let leftindex = 0;
    let finalnum;

    if (arr[i].elem == "+") {
      // console.log(i, arr[i]);
      for (let j = i - 1; j >= 0; j--) {
        if (arr[j].type == "number") {
          // console.log(arr[j].elem);
          firstnum.unshift(arr[j].elem);
          // console.log(firstnum);
        } else {
          leftindex = j + 1;
          // firstnum.join();
          // console.log(leftindex, firstnum);
          break;
        }
      }
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j].type == "number") {
          // console.log(arr[j].elem);
          secondnum.push(arr[j].elem);
          // console.log(secondnum);
        } else {
          rightindex = j;
          // secondnum.join();
          // console.log(rightindex, secondnum);
          break;
        }
      }
      // console.log(firstnum.join(""));
      // console.log(secondnum.join(""));
      finalnum = parseFloat(firstnum.join("")) + parseFloat(secondnum.join(""));
      // console.log("THE ANSWER IS " + finalnum);
      arr.splice(leftindex, rightindex - leftindex, {
        elem: `${finalnum}`,
        type: "number",
      });
      let dupli = arr.map((item) => {
        return item;
      });
      // console.log(arr);
      // console.log(dupli);
      // console.log(arr.length);
      i = 0;
    }
  }
}

// SUBTRACTION, LOOPS THROUGH TO FIND ALL SUBTRACTION OPERATIONS
export function subtract(arr) {
  for (let i = 0; i < arr.length; i++) {
    let firstnum = [];
    let secondnum = [];
    let rightindex = arr.length;
    let leftindex = 0;
    let finalnum;

    if (arr[i].elem == "-") {
      // console.log(i, arr[i]);
      for (let j = i - 1; j >= 0; j--) {
        if (arr[j].type == "number") {
          // console.log(arr[j].elem);
          firstnum.unshift(arr[j].elem);
          // console.log(firstnum);
        } else {
          leftindex = j + 1;
          // firstnum.join();
          // console.log(leftindex, firstnum);
          break;
        }
      }
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j].type == "number") {
          // console.log(arr[j].elem);
          secondnum.push(arr[j].elem);
          // console.log(secondnum);
        } else {
          rightindex = j;
          // secondnum.join();
          // console.log(rightindex, secondnum);
          break;
        }
      }
      // console.log(firstnum.join(""));
      // console.log(secondnum.join(""));
      finalnum = parseFloat(firstnum.join("")) - parseFloat(secondnum.join(""));
      // console.log("THE ANSWER IS " + finalnum);
      arr.splice(leftindex, rightindex - leftindex, {
        elem: `${finalnum}`,
        type: "number",
      });
      let dupli = arr.map((item) => {
        return item;
      });
      // console.log(arr);
      // console.log(dupli);
      // console.log(arr.length);
      i = 0;
    }
  }
}
