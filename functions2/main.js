// Exercise 1
/*
Write a function that takes three numbers as parameter, sums the integers and returns the result.
    The function should be defined as an arrow function
The functions should return the result
console.log(someFunctionName(10, 20, 5)); // 35*/

/*
let sum = (a, b, c) => {
    return a + b + c;
}
console.log(sum(10, 20, 5));*/

//Exercise 2
/*
Write a function that takes three numbers as parameter, identifies the largest number and returns the result.
    The function should be defined as an arrow function
The functions should not return anything (void function) - it should print the result to the HTML page using document.write()*/
/*let math = (a, b, c) => {
    if (a > b && a > c) {
        document.write(a);
    } else if (b > a && b > c) {
        document.write(b);
    } else {
        document.write(c);
    }
}
math(10, 20, 5);*/

// Exercise 3
/*
Write a function that receives two parameters. An array of numbers and a number.
    The function will return true if the number is higher than the array average
The function will return false if the number is lower than the array average
The function should be defined as an arrow function*/

/*let twoParameters = (array, number) => {
    let total = 0;
    array.forEach(number => {
        total += number;
    });
    let average = total / array.length;
    return number > average;
}
console.log(twoParameters([1, 2, 3, 4, 5], 6));*/

// Exercise 4
/*Write a function that takes an array of numbers as parameter, identifies the largest number and returns the result.
    The function should be defined as an arrow function
The functions should not return anything (void function) - it should print the result to the HTML page using document.write()
    The function should use the foreach syntax loop
    The function should use the Math.max() function to identify the largest number*/

/*let array = (array) => {
    let largestNumber = 0;
    array.forEach(number => {
        if (number > largestNumber) {
            largestNumber = number;
        }
    }
}
document.write(largestNumber);*/

// Exercise B
// Exercise 1
/*
Write a function that iterates through an array of strings and returns the average amount of letters pr. word
The function should use the foreach syntax loop
Remember that a string also has a .length property*/
/*

const strings = ["dog","cat","lazy","fox","jumps","over","the","fence","javascript","tobias rahim"]

function averageLetters(strings) {
    let total = 0;
    strings.forEach(string => {
        total += string.length;
    });
    return total / strings.length;
}

console.log(averageLetters(strings));*/

