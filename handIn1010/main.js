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

/*
function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
const diceRolling = parseInt(("How many times do you roll the dice?"))
function rollTheDice(numberOfRolls) {
    let sixCount = 0;
    for (let i = 0; i < numberOfRolls; i++) {
        let roll = getRandomNumber(1, 6);
        announceRoll(roll);
        if (roll === 6) {
            sixCount++;
        }
    }
    jackpot(sixCount, numberOfRolls);
};

function announceRoll(diceRolled) {
    if (diceRolled === 6) {
        console.log("You just hit a 6!")
    }
    else {
        console.log("Try again!")
    }
};

function jackpot(sixCount, numberOfRolls) {
    if (sixCount === numberOfRolls) {
        console.log("Jackpot")
    }
}

rollTheDice(diceRolling);*/

// Exercise 3 - Build a sentiment analyzer
/*
A sentiment analyzer is some functionality that figures out how positive/negative a sentence is.
    Fx the sentence "I am mega super awesome happy" Should have a high score The sentence "I hate doing boring stuff" should have a low score.
    Create a function that takes a string as a parameter. Calling the function will return an object with score, positiveWords and negativeWords. You decide how the score should be implemented and what words are negative and positive.
    Here is an example of using the function:
const sentimentScoreObject = getSentimentScore('I am mega super awesome happy');

console.log(sentimentScoreObject);
/!*
{
  score: 3,
  positiveWords: ['happy', 'awesome', 'super'],
  negativeWords: [],
}
*!/*/
/*
const positiveWords = ['happy', 'awesome', 'super', 'great', 'good', 'amazing', 'fantastic', 'excellent'];
const negativeWords = ['hate', 'boring', 'bad', 'terrible', 'awful', 'horrible', 'disgusting'];

function getSentimentScore(sentence) {
    const words = sentence.toLowerCase().split(' ');

    let score = 0;
    let positiveWordsFound = [];
    let negativeWordsFound = [];

    for (let word of words) {
        if (positiveWords.includes(word)) {
            score++;
            positiveWordsFound.push(word);
        } else if (negativeWords.includes(word)) {
            score--;
            negativeWordsFound.push(word);
        }
    }
    return {
        score: score,
        positiveWords: positiveWordsFound,
        negativeWords: negativeWordsFound
    };
}

const sentimentScoreObject = getSentimentScore('I hate being so bad and boring');
console.log(sentimentScoreObject);*/
