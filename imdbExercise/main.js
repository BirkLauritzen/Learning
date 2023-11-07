// sends a request to https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json
// Exercise 1
fetch('https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json')
    .then(response => response.json())
    .then(imdb => {
        console.log(imdb);
    });

// Exercise 2
fetch('https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json')
    .then(response => response.json())
    .then(imdb => {
        console.log(`${imdb.length} movies has been fetched`)
    });

// Exercise 3
// 71 is a movie from 2014 that is 5940 seconds long. It has a rating of 7.2 out of 41702 votes.
fetch('https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json')
    .then(response => response.json())
    .then(imdb => {
        const first = imdb[0]
        console.log(`${first.title} is a movie from 2014 that is ${first.running_times} long. It has a rating of ${first.rating} out of ${first.votes} votes.`)
    });

const ulElement = document.createElement("ul")
document.body.append(ulElement)
fetch('https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json')
    .then(response => response.json())
    .then(imdb => {
        imdb.forEach((movie) => {
            const liElement = document.createElement("li")
            liElement.textContent = movie.title
            ulElement.append(liElement)
            // console.log(movie.title)
        })
    });
const button = document.createElement("button")
fetch('https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json')
    .then(response => response.json())
    .then(imdb => {
        ulElement.innerHTML = "";
        document.body.append(button)
        button.addEventListener('click', function () {

            function isBigEnough(movie) {
                return movie.year >= 2014;
            }

            const filtered = imdb.filter(isBigEnough);
            console.log(filtered);
            ulElement.append(filtered)





        });
    });

/*
const inputElement = document.querySelector("input")
console.log(inputElement)
inputElement.addEventListener("input", function() {
    const inputText = inputElement.value;
    console.log(inputText);
    const moviesFetchedFromApi = movies.length > 0
    if (moviesFetchedFromApi) {
        console.log(movies);
        const matchingMovies = movies.filter(function() {
            return inputText in movie.title;
        })
        console.log(matchingMovies)
    }
})

function renderMovies (movies) {
    const ul = document.querySelector('ul');
    ul.innerHTML = "";
    console.log(ul)

    movies.forEach(function(movie) {
        const li = document.createElement('li');
        li.innerText = movie.title;
        ul.appendChild(li);
    })
}*/
