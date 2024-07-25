//  store first number and second number that are inputted
// utilize the operator the user selects and then call operate() when = pressed
// once opertate is called the solution should be dispalyed
// but the display should be populated before hand
// store all the values and call the operate function with them, no more than a pair
// eval first 2 pairs, display result, and then use that nuber in new calc, when second operator present
// round answers with long answers, preventing overflow
// dont allow = pressed until all nums and op present
// pressing clear (AC), clears data
// disable more than one decimal point
// make it look nice

//op1 gets assigned when operator is false, when operator is true, op2 gets assigned user val
// if operator.length >1, call operator(op1,operator[0], op2) and set op1 to that val, delete the first el off operator
// now that operator is still true, the input gets assigned to op2, and operator.length < 1 so operatote() doesnt get called yet,
// all of this runs on the event listner of course

let firstDigit = "";
let secondDigit = "";
let operator = "";
let solution = 0;

function updateDisplay(displayVal) {
  //update screen with values

  document.getElementById("display").innerHTML = displayVal;
}

// document
//   .querySelectorAll(".number")
//   .forEach((btn) => btn.addEventListener("click", getDigits));
document.getElementById("calculator").addEventListener("click", function (e) {
  if (e.target && e.target.matches(".number") && !operator.length) {
    firstDigit = parseInt((firstDigit += e.target.id));
  } else if (firstDigit && operator.length) {
    secondDigit = parseInt((secondDigit += e.target.id));
  }
  if (e.target && e.target.matches(".operator")) {
    operator += e.target.id;
    if (firstDigit && secondDigit) {
      if (operator.length > 1) {
        solution = operate(firstDigit, operator[0], secondDigit);
        operator = operator.substring(1);

        firstDigit = solution;
        secondDigit = 0;
      }
    }
  }
  console.log(
    firstDigit,
    secondDigit,
    operator,

    solution,
    "hi there im a solution"
  );
  let displayVal = firstDigit.toString() + operator;
  updateDisplay(displayVal);
});

function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}

function operate(a, operator, b) {
  if (a && b) {
    if (operator == "+") {
      return add(a, b);
    }
    if (operator == "-") {
      return subtract(a, b);
    }
    if (operator == "*") {
      return multiply(a, b);
    }
    if (operator == "/") {
      return divide(a, b);
    }
  }
}
