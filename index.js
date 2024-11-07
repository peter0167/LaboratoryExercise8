//Task #1: Logical NOT
let firstValue = prompt("Enter the first boolean value (true/false): ").toLowerCase() === "true";
let secondValue = prompt("Enter the second boolean value (true/false): ").toLowerCase() === "true";  
let thirdValue = prompt("Enter the third boolean value (true/false): ").toLowerCase() === "true";

let result = !firstValue && !secondValue && !thirdValue;
console.log("Result after negating each value and combining with AND: ", result);

//Task #2: Logical AND
firstValue = prompt("Enter the first boolean value (true/false): ").toLowerCase() === "true";
secondValue = prompt("Enter the second boolean value (true/false): ").toLowerCase() === "true";

let combine = (firstValue && secondValue);
console.log("Result: ", combine);

//Task #3: Logical OR
firstValue = prompt("Enter the first boolean value (true/false): ").toLowerCase() === "true";
secondValue = prompt("Enter the second boolean value (true/false): ").toLowerCase() === "true";

combine = (firstValue || secondValue);
console.log("Result: ", combine);

//Task #4:Logical Operator Precedence
let firstBoolean = prompt("Enter the first boolean value (true/false): ").toLowerCase() === "true";
let secondBoolean = prompt("Enter the second boolean value (true/false): ").toLowerCase() === "true";
let thirdBoolean = prompt("Enter the third boolean value (true/false): ").toLowerCase() === "true";

let orResult = firstBoolean || secondBoolean;
let Result = orResult && thirdBoolean; 
console.log("Result after combining OR and AND: ", finalResult);

//Task #5: Negating and Comparing Values
let num1 = parseInt(prompt("Enter the first number: "));
let num2 = parseInt(prompt("Enter the second number: "));

let equalCheck = (num1 === num2);
let greaterThanCheck = (num1 > 0);
let negated = (!equalCheck && !greaterThanCheck);
console.log("Result: ",negated);

//Task #6: Logical Operators with Mixed Data Types
let userNumber = parseInt(prompt("Enter a number: "));
let isBooleanTrue = prompt("Enter a boolean value (true/false): ").toLowerCase() === "true";

let finalResult = (userNumber > 0) && isBooleanTrue;
console.log("Result: ", finalResult);

