//Exercise A
//Exercise 1
const arrayOne = [5,6,3,4,6,34,5,5];
const arrayTwo = [5,5,5,66,7,3,1,1,1,4];

const concatenatedArrays = arrayOne.concat(arrayTwo);
const sortedArrays = concatenatedArrays.sort((a, b) => a - b);

console.log(sortedArrays);

//Exercise 2

//Create the initial javascript like this:
let number = "22";
let number2 = "22";

console.log(number + number2);
//Output: 2222

const stringToNumber = parseInt(number) + parseInt(number2);
console.log(stringToNumber);

//Exercise 3
//Create the initial javascript like this:
let participants = ["nicklas;33","benjamin;44","lars;55"];

for (let i = 0; i < participants.length; i++) {
    let splitParticipants = participants[i].split(";");
    console.log(splitParticipants[1]); // Print the number, which is the second part
}


//Exercise B
//Exercise 1

someFunctionName("hello"); // logs out hello
someFunctionName("abcde"); // logs out abcde*!/

function thisIsAFunction() {
    console.log("hello");
}

thisIsAFunction();

//Exercise 1.1
function someFunctionName(number1, number2) {
    return number1 + number2;
}
const returnedNumber = someFunctionName(2, 6);
console.log(returnedNumber); // 8

//Exercise 2

console.log(someFunctionName('kea')); // false
console.log(someFunctionName('anna')); // true


let string = prompt("Enter a string: ");

function TrueOrFalse(string) {
    return string.charAt(0) === "a" || string.charAt(0) === "A"
}

console.log(TrueOrFalse(string));


//Exercise 3

Celsius to Fahrenheit Formula: (°C * 1.8) + 32 = °F
Fahrenheit to Celsius Formula: (°F - 32) / 1.8 = °C*/


let celsius = prompt("How many degrees celsius? ");
function CelsiusToFahrenheit(celsius) {
    return (celsius * 1.8) + 32;
}
console.log(CelsiusToFahrenheit(celsius), " degrees farhenheit");

let fahrenheit = prompt("How many degrees fahrenheit? ");
function FahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) / 1.8;
}
console.log(FahrenheitToCelsius(fahrenheit), " degrees celsius");

//Exercise 4

Create a function called increaseByHalf that should
Take a number as an input
Return this input number increased by half of the input number
Here is an example of the output
console.log(increaseByHalf(50)); // 75
console.log(increaseByHalf(100)); // 150*/


function increaseByHalf(number) {
    return number + (number / 2);
}
console.log(increaseByHalf(50));
console.log(increaseByHalf(100));*/

//Exercise 5

Examine out the code below:
    function printMessage(x) {
        console.log("Hello, nice to meet you " + x);
    }

function getMessage(name) {
    return "Hello, nice to meet you " + name;
}

printMessage("Mitch");
printMessage("August");
getMessage("Laetitia");
The functions above behave similarly but differ in some important ways.
    Study the code above and then answer the following questions:
    How many times is the function printMessage called ?
    How many times is the function getMessage called ?
    What is the parameter name for the function printMessage ?
    What is the parameter name for the function getMessage ?


