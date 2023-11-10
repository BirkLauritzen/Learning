// Declaring the DOM constants
const searchButton = document.querySelector("#search");
const inputSearch = document.querySelector("#input");
const imageGif = document.querySelector("#gif");

const randomInteger = Math.floor(Math.random() * 50);

// Function that fetches gif from giphy api with the parameter searchWord that takes an input argument
function gifsFetched(searchWord) {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${encodeURIComponent(searchWord)}&api_key=BhcJh1RcjlshrIQH6D8POCuH5upDcc4e`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(gifData => {
            if (gifData.data.length > 0) {
                imageGif.setAttribute("height", "300px", "width", "300px");
                const gifUrl = gifData.data[randomInteger].images.original.url; // Accessing the URL of the GIF
                imageGif.src = gifUrl; // Setting the src attribute of the imageGif element
            } else {
                console.log('No results found');
            }
        });
}

// DOM event that finds gifs from the input word via inputSearch and puts it in searchWord from gifsFetched
searchButton.addEventListener("click", function () {
    const searchTerm = inputSearch.value;
    gifsFetched(searchTerm);
});

searchButton.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        const searchTerm = inputSearch.value;
        gifsFetched(searchTerm);
    }
});