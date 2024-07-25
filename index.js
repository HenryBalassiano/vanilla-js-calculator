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

function removeDecimal(input) {
  let parts = input.split(".");
  if (parts.length > 1) {
    return parts[0] + "." + parts.slice(1).join("");
  }
  return Number(input).toString();
}
document.getElementById("calculator").addEventListener("click", function (e) {
  if (e.target && e.target.matches(".number")) {
    if (!operator.length) {
      firstDigit = removeDecimal((firstDigit += e.target.id));
    } else if (operator.length && !firstDigit) {
      firstDigit = removeDecimal((firstDigit += e.target.id));
    } else if (firstDigit && operator.length) {
      secondDigit = removeDecimal((secondDigit += e.target.id));
    }
  }
  if (operator.length > 0) {
    if (!firstDigit) {
      operator = operator.substring(1);
    }
    if (firstDigit && !secondDigit) {
      operator = operator.substring(1);
    }
  }
  if (e.target && e.target.matches(".operator")) {
    operator += e.target.id;

    if (firstDigit && secondDigit) {
      if (operator.length > 0) {
        solution = operate(
          parseFloat(firstDigit),
          operator[0],
          parseFloat(secondDigit)
        );
        operator = operator.substring(1);
        firstDigit = solution;
        secondDigit = "";
      }
    }
  }

  console.log(
    firstDigit,
    "first dig",
    secondDigit,
    "second dig",
    operator,

    solution
  );
  let displayVal = Math.round(solution * 100) / 100 + operator;
  updateDisplay(solution ? displayVal : firstDigit);
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
