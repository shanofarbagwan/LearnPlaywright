// Valid identifiers
var $ = 10;
var _ = 20;
var firstName = "John";
var lastName = "Doe";// camel case convention
var fullName = firstName + " " + lastName;
const PI = 3.14;
let count = 5;

// Invalid identifiers (examples only; these would cause syntax errors)
// var 1name = "error";    // starts with a number
// var my-name = "error";  // hyphen is not allowed
// var break = 5;          // reserved keyword

console.log("Valid identifiers:", $, _, firstName, PI, count);
console.log("Full Name:", fullName);

