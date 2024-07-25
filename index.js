let firstDigit = "";
let secondDigit = "";
let operator = "";
let solution = 0;

function clearCalc() {
  firstDigit = "";
  secondDigit - "";
  operator = "";
  solution = 0;
}
function updateDisplay(displayVal) {
  document.getElementById("display").innerHTML = displayVal;
}

function removeDecimal(input) {
  let parts = input.split(".");

  if (parts.length > 1) {
    console.log(parts[1]);
    return parts[0] + "." + parts[1].toString();
  }
  return Number(input).toString();
}

document.getElementById("calculator").addEventListener("click", function (e) {
  if (e.target && e.target.matches(".AC")) {
    console.log("ufdkfdk");
    clearCalc();
  }
  if (e.target && e.target.matches(".submit") && firstDigit && secondDigit) {
    solution = operate(
      parseFloat(firstDigit),
      operator[0],
      parseFloat(secondDigit)
    );
    operator = operator.substring(1);
    firstDigit = solution;
    secondDigit = "";
  }
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

  let displayVal =
    firstDigit && !secondDigit
      ? firstDigit.toString().substring(0, 8) + operator
      : secondDigit.toString().substring(0, 8);

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
