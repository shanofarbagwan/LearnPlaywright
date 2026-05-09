// Identifier naming styles with examples

// camelCase: common for variables and functions in JavaScript
let camelCaseExample = "hello";
function calculateTotalPrice(quantity, unitPrice) {
  return quantity * unitPrice;
}

// PascalCase: common for class names and constructor functions
class PascalCaseExample {
  constructor(name) {
    this.name = name;
  }
}

// snake_case: sometimes used in constants or non-JS conventions
const snake_case_example = 42;

// UPPER_SNAKE_CASE: common for constant values
const MAX_ATTEMPTS = 5;

// kebab-case: not valid for JS identifiers (only valid in strings or file names)
// let kebab-case-example = "no"; // invalid syntax

console.log(camelCaseExample);
console.log(calculateTotalPrice(3, 9.99));
console.log(new PascalCaseExample("Alice"));
console.log(snake_case_example);
console.log(MAX_ATTEMPTS);
