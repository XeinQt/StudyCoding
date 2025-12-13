const total = document.getElementById("total");
const number1 = document.getElementById("number1");
const number2 = document.getElementById("number2");

//btn
const add = document.getElementById("add");
const substraction = document.getElementById("substraction");
const multiplication = document.getElementById("multiplication");
const division = document.getElementById("division");

const calculate = document.getElementById("calculate");

let operation = "";

add.addEventListener("click", () => {
  operation = "+";
  console.log(operation);

  console.log("click");
});

substraction.addEventListener("click", () => {
  operation = "-";
});
multiplication.addEventListener("click", () => {
  operation = "*";
});
division.addEventListener("click", () => {
  operation = "/";
});

calculate.addEventListener("click", () => {
  //   console.log(operation);
  //   console.log(number1.value);

  if (operation === "+") {
    total.innerText = number1.value + number2.value;
  } else if (operation === "-") {
    total.innerText = number1.value - number2.value;
  } else if (operation === "*") {
    total.innerText = number1.value * number2.value;
  } else if (operation === "/") {
    total.innerText = number1.value / number2.value;
  }
});
