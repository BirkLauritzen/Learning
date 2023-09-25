/* let greeting = "Hello how are you";
console.log(greeting);
console.log(greeting);
console.log(greeting); */

/*console.log("I'm awesome!");
const name = "peter";
console.log(`My name is ${name}. ` + `it has ${name.length} characters`);

 */
/* const numberOfTeachers = 3, numberOfStudents = 20;
console.log("Number of students " + numberOfStudents);
console.log("Number of teachers " + numberOfTeachers);
console.log("Total number of students and teachers ", numberOfStudents + numberOfTeachers);
console.log("Percentage of Teachers: ",numberOfTeachers/(numberOfStudents + numberOfTeachers)*100);
console.log("Percentage of Students: ",numberOfStudents/(numberOfTeachers + numberOfStudents) *100);*/

// New pizza order: <name of pizza>. The price of the pizza is: <price of pizza>

/* let pizzaName = prompt("Hvilken pizza kunne du tænke dig?");
const pizzaPrice = 80;
let pizzaTal = prompt("Hvor mange pizza'er kunne du tænke dig");
console.log(`New pizza order: ${pizzaName} ${pizzaTal}x. The price of the pizzas is: `, pizzaPrice * pizzaTal); */

/* for(let i = 30; i > 9; i--) {
    console.log(i);
}

console.log("loop done"); */

/*const yearOfBirth = 2000;
const yearOfFuture = 2045;
const age = yearOfFuture-yearOfBirth;

console.log(`In the year ${yearOfFuture} you will be ${age} years old!`); */

// Exercise 2.1 - level 1
/*
let yourBalance = prompt("How much money is in your balance?💸")

if (yourBalance > 10000) {
    console.log("I am rich!💰");
} else if (yourBalance < 10000) {
    console.log("I am poor🪙")
} else {
    console.log("This is not a number!💩")
}*/

// Exercise 3 - level 2
/*let yourMood = prompt("How is your mood today?");

if (yourMood === "happy") {
    console.log("Good job you're doing great!");
} else if (yourMood === "sad") {
    console.log("Every cloud has a silver lining");
} else if (isFinite(yourMood)) {
    console.log("Beep beep boop")
} else {
    console.log("I'm sorry, I'm still learning about feelings");
}*/

// Exercise 5 - level 1
/*//Print out Hello World 3 times
for (let i = 0; i < 3; i++) {
    console.log("Hello World")
}

//Use a loop to print the numbers from 1 to 10
for (let i = 1; i < 11; i++) {
    console.log(i)
}

//Use a loop to print a * 10 times
for (let i = 0; i < 10; i++) {
    console.log("*")
}

//Use a loop to print the numbers starting from 5 to -5
for (let i = 5; i > -6; i--) {
    console.log(i)
}

//Use a loop to print every third number from 5 to 30
for (let i = 5; i < 31; i +=3) {
    console.log(i)
}*/

//Exercise 7 - level 2
// Random number between 0 and 10
/*
const randomNumber = Math.floor(Math.random() * 11);
for (let i = 0; i < randomNumber; i++) {
    console.log('#')
}*/

//Exercise 8 - level 2
/*
1
2
3
4
5
6 is larger than 5
7 is larger than 5
8 is larger than 5
9 is larger than 5
10 is larger than 5 */

/*
for (let i = 1; i < 6; i++) {
    console.log(i)
}
for (let j = 6; j < 11; j++) {
    console.log(j + " is larger than 5")
}*/

// Exercise 8.1 - level 2
/*
1 is a small number
2 is a small number
3 is a small number
4 is a relatively small number
5 is a relatively small number
6 is a relatively small number
7 is a large number
8 is a large number
9 is a large number
10 is ten */

/*
for (let i = 1; i < 4; i++) {
    console.log(i + " is a small number")
}
for (let j = 4; j < 7; j++) {
    console.log(j + " is a relatively small number")
}
for (let k = 7; k < 10; k++) {
    console.log(k + " is a large number")
}
console.log("10 is ten")*/

//Exercise 9 - level 2
/*
C
o
p
e
n
h
a
g
e
n
This is the last character
 */

/*
const city = "COPENHAGEN";

for (let i = 0; i < city.length; i++) {
    if (i === city.length - 1) {
        console.log("This is the last character:", city[i]);
    } else {
        console.log(city[i]);
    }
}
*/


