"use strict";
let age = 25;
let pie = 3.1416;
let isActive = true;
let AmarName = "Muhammad Aziz";
// null
let Nothing = null;
// undefined
let notDefined = undefined;
// any
let randomValue = 5;
randomValue = "Now its a string";
randomValue = true;
// unknown
let userInput = 'hello';
if (typeof userInput === "string") {
    // console.log(userInput.toUpperCase());
}
// void
function greet() {
    // console.log("hello");
}
greet();
let apiResponse = {
    message: "data loaded",
    status: "success",
};
const user = {
    id: 101,
    name: "Aziz",
};
user.name = "Ahmed";
console.log(user.name);
// array
let numbers = [1, 2, 3, 4, 5];
let fruits = ["banana", "apple", "orange"];
const [a, b, c] = fruits;
console.log(a, b, c);
