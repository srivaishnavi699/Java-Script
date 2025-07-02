//functions in javascript
function add(x, y) {
    return x + y;
}

let a=10;
let b=20;
let sum = add(a, b);
console.log("The sum is: " + sum);
console.log("-----------------------------------------------------------")

function sub(x, y) {
    return x - y;
}
let c=sub(10, 5);
console.log("The difference is: " + c);
console.log("-----------------------------------------------------------")

//with parameters and with return value
function multiply(x, y) {
    return x * y;
}
let product = multiply(5, 6);// calling the function with parameters
console.log("The product is: " + product);
console.log("-----------------------------------------------------------")

//with parameters and without return value
function displayMessage(message) {
    console.log("Message: " + message);
}
displayMessage("Hello, this is a message!");
console.log("-----------------------------------------------------------")

//without parameters and without return value
function greet() {
    console.log("Hello, World!");
}
greet();
console.log("-----------------------------------------------------------")

//without parameters and with return value
function getCurrentYear() {
    return new Date().getFullYear();
}
let currentYear = getCurrentYear();
console.log("Current Year: " + currentYear);
console.log("-----------------------------------------------------------")

//function with default parameters
function greetUser(name = "Guest") {
    console.log("Hello, " + name + "!");
}
greetUser(); // No argument passed, will use default value
greetUser("Alice"); // Argument passed, will use "Alice" as name
console.log("-----------------------------------------------------------")

