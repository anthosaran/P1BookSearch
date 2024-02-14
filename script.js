// API Keys
const api_key = '128dee2fac7940751c04a6c08fb44dec';
const access_token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMjhkZWUyZmFjNzk0MDc1MWMwNGE2YzA4ZmI0NGRlYyIsInN1YiI6IjY1Y2I3MDgxOGMzMTU5MDE2MzM4Y2Y2MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jRU_r6RYaU0qrUxcw7qPdwvD0JW5rWiPp3YQ58TPqdQ';
const book_api_key = 'AIzaSyBt1TmrUsfW9y0Mm29Ge-DRop9leFfoz34';  

let inputData = {
    searchText: '',
    searchOption: ''
}

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${access_token}`
    }
}

const bookOptions = {
    method: 'GET', 
    headers: {
        accept: 'application/json',
        // "X-Auth-Token": book_api_key,
        // 'Access-Control-Allow-Origin': '*',
        'Authorization': `Bearer ${book_api_key}`
}
};

const fetchMovies = () => {
    fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
  .then(response => response.json())
  .then(response => {
    localStorage.setItem('movies', JSON.stringify(response));
  })
  .catch(err => console.error(err));
} 

const getInputValue = () => {
    let inputVal = document.querySelector('input').value;
    let searchItem = document.getElementById('searchItem');
    let text = searchItem.options[searchItem.selectedIndex].text;
    inputData = {
        searchText: inputVal,
        searchOption: text,
    }
    console.log(inputData)
}

// google books API key 

const fetchBooks = () =>{
    fetch('https://www.googleapis.com/auth/books', bookOptions)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
};
