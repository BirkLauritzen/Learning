// Selector that selects the button element and adds a click event listener
document.querySelector('button').addEventListener('click', () => {

    // A forEach loop that iterates over the array of inflation numbers and play a tone for each number
    danishInflationNumbers.forEach((dataPoint, index) => {
        const synth = new Tone.Synth().toDestination();
        const now = Tone.now();
        // A constant that adds time between each note and a triggerAttackRelease method that plays the tone
        const timeBetweenNotesInSeconds = 0.2;
        synth.triggerAttackRelease((dataPoint * 10) + 300, "12n", now + (index * timeBetweenNotesInSeconds));
    });
});
