// Exercise 1
/*
Create an array that contains a list of your interests. Get the number of interests you have added to the list. Give the variable a good name
Log out the following string I have 10 interests*/

const interests = ['interest 1', 'interest 2', 'interest 3', 'interest 4',
    'interest 5', 'interest 6', 'interest 7', 'interest 8', 'interest 9', 'interest 10'];

console.log("I have " + interests.length + " interests");

// Exercise 2 - level 1
/*
Using the following array
const fruits = ['banana', 'apple', 'strawberry', 'kiwi', 'fig', 'orange'];
Now, using the correct indexes, print the following values from the array:
strawberry
kiwi
orange
banana
taken from https://syllabus.codeyourfuture.io/js-core-1/week-2/lesson#arrays*/


const fruits = ['banana', 'apple', 'strawberry', 'kiwi', 'fig', 'orange'];
console.log(fruits[2], fruits[3], fruits[5], fruits[0]);

// Exercise 3 - level 2
/*
Write some code that can get the first and last elements in an array.*/

const names = ['Peter', 'Susan', 'Charlotte'];
// Use the names array
const firstNameInArray = names[0];
const lastNameInArray = names[names.length-1];

console.log(firstNameInArray); // Peter
console.log(lastNameInArray); // Charlotte


const fruits = ['pear', 'banana', 'apple', 'grape'];
const firstFruitInArray = fruits[0];
const lastFruitInArray = fruits[fruits.length-1];

console.log(firstFruitInArray); // pear
console.log(lastFruitInArray); // grape

// Exercise 4 - Favorite Songs - level 2
/*  Create an array called favoriteSongs and add five of your favorite song titles.
    Use the .push method to add another song to the end of the array.
    Use the indexOf method to find the position of a song in the array.*/


let favoriteSongs = ['song1', 'song2', 'song3', 'song4', 'song5'];
favoriteSongs.push('song6');
console.log(favoriteSongs.indexOf('song6'))
console.log(favoriteSongs);

// Exercise 8 - level 2
/*
Given the following array:
    const words = ["apple", "banana", "cherry", "date", "elderberry"];
Write a program that prints out each word and its length.
    Here is the expected output:
apple: 5
banana: 6
cherry: 6
date: 4
elderberry: 10*/

const words = ["apple", "banana", "cherry", "date", "elderberry"];

for (let i = 0; i < words.length; i++) {
    console.log(words[i] + ": " + words[i].length);
}

// Exercise 9 - level 2
/*
Given the following array:
    const animals = ['cat', 'dog', 'bird', 'fish', 'elephant'];
Write code that finds the index of 'bird' in the array and then replaces it with 'parrot'. Print the updated array.
    Expected output: ['cat', 'dog', 'parrot', 'fish', 'elephant']*/

const animals = ['cat', 'dog', 'bird', 'fish', 'elephant'];
const birdIndex = animals.indexOf("bird");
animals[birdIndex] = "parrot";
console.log(animals[2]);

// Exercise 10 - level 3
/*
Given the following array:
    const grades = [85, 90, 78, 88, 76, 95, 89];
Write code that
Calculates the total grades from the array
Calculates the average grades in the array
Expected output: Average grade is 86*/

const grades = [85, 90, 78, 88, 76, 95, 89];
let totalGrades = 0;
let averageGrades = 0;

for (let i = 0; i < grades.length; i++) {
    totalGrades += grades[i];
}
averageGrades = totalGrades / grades.length;
console.log("Total grade is " + totalGrades);
console.log("Average grade is " + averageGrades);

// Exercise 11 - level 3
/*
Using the following array:
    const words = ['apple', 'banana', 'cherry', 'date', 'fig'];
Write code that prints the words that have more than 5 letters.
    Expected output: banana cherry*/


const words = ['apple', 'banana', 'cherry', 'date', 'fig'];
if (words.length > 5) {
    console.log(words);}
