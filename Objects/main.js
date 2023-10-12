// Exercise 1


const kitten = {
    "fur colour": "orange",
    age: 23,
};

const laptop = {
    "brand": "Lenovo",
    "ram": "5GB",
};

const phone = {
    "operating system": "iOS",
    "hasStylus": true,
    "megapixels": 12,
    "batteryLife": "24 hours",
};

// Exercise 2

//Create an object that describes you. Fx a key called age with the value of 28. Add a key that holds an array. Add minimum 6 keys


const me = {
    "name": "Birk",
    "age": 23,
    "height": 174,
    "shoeSize": 42.5,
    "heirColor": "dirtyBlond",
    "favorite": "cat",
}

// Exercise 3


// console.log the values of each property of "kitten"
let kitten = {
    ageMonths: 3,
    isFemale: true,
    furColour: "brown",
};

console.log(kitten)

// Exercise 4


const dog = {
    name: "Billy",
    wantsToPlay: false,
};

dog.name = "Rex"
dog.wantsToPlay = true
// WRITE CODE ABOVE THIS LINE

console.log(dog.name);
console.log(dog.wantsToPlay);

// -> it should output:
// Rex
// true*/

// Exercise 5

// Using the astronautsInSpace variable log out the following things
// The number of astronauts in space right now
// The name of the craft of the last person in the array
// The lastname of the first astronaut in the ISS


const astronautsInSpace = {
    people: [
        {
            name: "Oleg Artemyev",
            craft: "ISS"
        },
        {
            name: "Denis Matveev",
            craft: "ISS"
        },
        {
            name: "Sergey Korsakov",
            craft: "ISS"
        },
        {
            name: "Kjell Lindgren",
            craft: "ISS"
        },
        {
            name: "Bob Hines",
            craft: "ISS"
        },
        {
            name: "Samantha Cristoforetti",
            craft: "ISS"
        },
        {
            name: "Jessica Watkins",
            craft: "ISS"
        },
        {
            name: "Cai Xuzhe",
            craft: "Tiangong"
        },
        {
            name: "Chen Dong",
            craft: "Tiangong"
        },
        {
            name: "Liu Yang",
            craft: "Tiangong"
        }
    ],
    message: "success"
}

console.log(astronautsInSpace.people.length)

const astronauts = astronautsInSpace.people;
const lastAstronaut = astronauts[astronauts.length-1]
const lastCraft = lastAstronaut.craft;
console.log(lastCraft)

/!*
let lastName = astronautsInSpace.people.split(' ');
console.log(lastName[1])*!/

const astronautName = astronautsInSpace.people;
const astronautNameElement = astronautName[0]
const lastName = astronautNameElement.name;
const splitLastName = lastName.split(' ')
console.log(splitLastName[1])

// Exercise 6
function getTotalPrice(cart) {
    let totalPrice = 0;
    for(let item in cart) {
        const itemHasPriceAndQuantity = item.price !== undefined && item.quantity !== undefined
        if(itemHasPriceAndQuantity) {
            totalPrice = totalPrice + item.price * item.quantity;
        }
    }
    return totalPrice;
}

 const cart = [
    {name: 'apple', price: 1, quantity: 3},
    {name: 'banana', price: 2, quantity: 2},
    {name: 'cherry', price: 3, quantity: 1}
];

console.log(getTotalPrice(cart));

// Exercise 7
let currentStatus = undefined
function checkPassword(user_data) {
    let user = user_data['user'];
    let password = user_data['password'];
    if (user.length > 0 && password.length > 8) {
        currentStatus = 'valid';
    }
    else {
        currentStatus = 'invalid';
    }
    alert('Status: ' + currentStatus);
}

checkPassword({user: "test", password: "123456789"});

