

function delayedLogger (str, sec) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(str);
        }, sec * 1000);
    });
}

document.querySelector('button').addEventListener('click', () => {
    delayedLogger("Hej med dig", 3).then((resolvedValue) => {
        console.log(resolvedValue);
    });
});

/*
1. Create a function named delayedLogger that takes a string and a number of seconds as parameters.
2. When delayedLogger is called, it should wait the specified number of seconds and then log the given string to the console.
3. Modify the function so that instead of directly logging the string, it returns a Promise that resolves with the string after the delay.
4. Add a button to an HTML page. When this button is clicked, call delayedLogger with a string of your choice and the delay set to 3 seconds.
Use .then() to log the resolved value from the Promise.

*/