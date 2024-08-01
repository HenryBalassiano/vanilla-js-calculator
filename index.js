let calculator = {
  firstDigit: "",
  secondDigit: "",
  operator: "",
  solution: 0,

  clear() {
    this.firstDigit = "";
    this.secondDigit = "";
    this.operator = "";
    this.solution = 0;
    this.updateDisplay(0);
  },

  updateDisplay(displayVal) {
    document.getElementById("display").innerHTML = displayVal.substring(0, 9);
  },

  handleNumber(input) {
    if (!this.operator.length) {
      this.firstDigit = this.removeDecimal(this.firstDigit + input);
    } else {
      this.secondDigit = this.removeDecimal(this.secondDigit + input);
    }
    this.updateDisplay(this.getDisplayValue());
  },

  handleOperator(op) {
    if (this.firstDigit && this.secondDigit) {
      this.calculate();
    }
    this.operator = op;
    this.updateDisplay(this.getDisplayValue());
  },

  calculate() {
    if (this.firstDigit && this.operator && this.secondDigit) {
      this.solution = this.operate(
        parseFloat(this.firstDigit),
        this.operator,
        parseFloat(this.secondDigit)
      );
      this.firstDigit = this.solution.toString();
      this.secondDigit = "";
      this.operator = "";
      this.updateDisplay(this.getDisplayValue());
    }
  },

  removeDecimal(input) {
    let parts = input.split(".");
    if (parts.length > 1) {
      return parts[0] + "." + parts[1];
    }
    return Number(input).toString();
  },

  getDisplayValue() {
    return this.secondDigit || this.firstDigit + this.operator;
  },

  operate(a, operator, b) {
    switch (operator) {
      case "+":
        return a + b;
      case "-":
        return a - b;
      case "*":
        return a * b;
      case "/":
        return a / b;
      default:
        return 0;
    }
  },

  init() {
    this.updateDisplay(0);
  },
};

document.getElementById("calculator").addEventListener("click", function (e) {
  if (e.target.matches(".number")) {
    calculator.handleNumber(e.target.id);
  } else if (e.target.matches(".operator")) {
    calculator.handleOperator(e.target.id);
  } else if (e.target.matches(".submit")) {
    calculator.calculate();
  } else if (e.target.matches(".AC")) {
    calculator.clear();
  }
});

calculator.init();
