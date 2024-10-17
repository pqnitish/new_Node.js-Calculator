// import the crypto module
const crypto = require("crypto");
const { log } = require("util");
//  get a commands using process.argv
const args = process.argv.slice(2); // removing first two elements(node and script filename)
//console.log(args);
function calculator() {
  // extract operation and arguments
  const operation = args[0];
  const numbers = args.slice(1).map(Number);
  //console.log(numbers);
  switch (operation) {
    case "add":
      ///validate
      if (numbers.length < 1) {
        console.log("Additon requires at least two numbers");
        return;
      }
      console.log(numbers.reduce((acc, val) => acc + val));
      break;
    case "sub":
      if (numbers.length < 1) {
        console.log("subtraction requires at least two numners");
        return;
      }
      console.log(numbers.reduce((acc, val) => acc - val));
      break;
    case "mult":
      if (numbers.length < 1) {
        console.log("multiplication requires at least two numners");
        return;
      }
      console.log(numbers.reduce((acc, val) => acc * val));
      break;
    case "divide":
      if (numbers.length < 1) {
        console.log("division requires at least two numners");
        return;
      }
      console.log(numbers.reduce((acc, val) => acc / val));
      break;
    case "sin":
      if (numbers.length !== 1) {
        console.log("sine operation requires exactly one number");
        return;
      }
      console.log(Math.sin(numbers[0]));
      break;
    case "cos":
      if (numbers.length !== 1) {
        console.log("cosine operation requires exactly one number");
        return;
      }
      console.log(Math.cos(numbers[0]));
      break;
    case "tan":
      if (numbers.length !== 1) {
        console.log("tagent  operation requires exactly one number");
        return;
      }
      console.log(Math.tan(numbers[0]));
      break;
    case "random":
         const length = numbers[0];
      if (!length) {
        console.log("provide length for random number generation");
        return;
      }
      const randomNumber = crypto
        .randomBytes(Math.ceil(length / 2))
        .toString("hex").slice(0, length);
      console.log(randomNumber);
      break;
    default:
      console.log("invalid operation");
  }
}
calculator();
