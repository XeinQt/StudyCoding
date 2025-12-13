function variables(num1, num2) {
  let x = 10;

  x = 20;
  //   console.log(x);

  const y = 20;
  y = 30;

  const total = num1 + num2;
  console.log(total);
}

// let addition = 0;
// let substraction = 0;
// let multiplication = 0;
// let division = 0;

function miniCalulator(num1, num2, symbol) {
  if (symbol === "+") {
    addition++;
    console.log(num1 + num2);
    console.log(`Addition was called ${addition} time(s)`);
  } else if (symbol === "-") {
    substraction++;
    console.log(num1 - num2);
    console.log(`Subtraction was called ${substraction} time(s)`);
  } else if (symbol === "*") {
    multiplication++;
    console.log(num1 * num2);
    console.log(`Multiplication was called ${multiplication} time(s)`);
  } else if (symbol === "/") {
    division++;
    console.log(num1 / num2);
    console.log(`Division was called ${division} time(s)`);
  }
}

// miniCalulator(10, 5, "+");
// miniCalulator(10, 5, "+");
// miniCalulator(10, 5, "-");
// miniCalulator(10, 5, "*");
// miniCalulator(10, 5, "/");
