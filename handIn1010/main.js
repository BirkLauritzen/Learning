// Exercise 1 - What to wear

// Create a function (that you have to name) that has temperature as parameter.
// Based on the temperature it should return a string with what the user should wear.
// You decide what the user should wear based on the temperature.

/*const clothesToWear = youCreateThisFunctionName(18);
console.log(clothesToWear); // Logs out: "shorts and a t-shirt"*/

/*
function whatToWear(temperature) {
    if (temperature < 10) {
        console.log("Wear clothes + jacket");
    }
    else if (temperature >= 10 && temperature <= 20) {
        console.log("Wear clothes")
    }
    else if (temperature > 20) {
        console.log("Wear summer clothes");
    }
    else {
        console.log("Please enter a valid number");
    }
}

whatToWear(20)*/

// Exercise 2 - Dice game

// Write a function that simulates a dice roll. You call the function with the number of times you would like to roll the dice.
// Every time the dice hits a 6 log out You just hit 6!

/*// This means roll the dice 3 times. 6 is hit once
rollTheDice(3);
// You just hit 6

// The dice is rolled 5 times with 2 hits
rollTheDice(5);
// You just hit 6
// You just hit 6

// For loop med math.random
// Return value
// if statement with returned value

// Here the user rolls 5 times but does not hit 6 even once
rollTheDice(5);*/

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const diceRolling = prompt("How many times do you roll the dice?")
function rollTheDice(numberOfEyes) {
    for (let i = 0; i < diceRolling; i++) {
        console.log(getRandomInt(1,6))
    }
    if (rollTheDice() == 6)
        console.log("You just hit 6!")
    }
    else
    {
    console.log("Better luck next time")
    }
}

rollTheDice()