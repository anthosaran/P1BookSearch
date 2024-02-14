// API Keys
let buttonSearch = document.getElementById('searchBtn') 

// Responsible to get all the details that the user has typed in the input box and 
// the option selected by the user whether to search movies or books

const getInputValue = (event) => {

    event.preventDefault();
    let inputVal = document.querySelector('#search-input').value;
    let searchItem = document.getElementById('searchItem');
    let searchOption = searchItem.options[searchItem.selectedIndex].text;

    if (searchOption === "Movies Search"){
        fetchMovies(inputVal)
    }else if (searchOption === "Books Search"){
        fetchBooks(inputVal)
    }
    
}



const fetchMovies = (inputData) => {
    // https://api.themoviedb.org/3/movie/popular?query=jumanji&language=en-US&page=1'+inputData
    fetch('https://api.themoviedb.org/3/movie/popular?query='+inputData+'&language=en-US&page=1', {
        method: 'GET', 
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZGMyYTQ2ZmZiNjVhZmNhYmRkZTdmYzhiNjk4MWNjNSIsInN1YiI6IjY1Y2I3MDgxOGMzMTU5MDE2MzM4Y2Y2MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._hCnBQDFw1Aw1dQXf0H2h0x_Qe04lccyfeJvUyoybcQ'
        }
    })
  .then(response => response.json())
  .then(response => {
    console.log(response);
    let result = response.results

    // Make a for loop to loop through each of the result object
    // Need to create the below HTML inside JS using document.createElement, .append()

//     <div class="p-4">
//     <h2 class="mb-2 text-lg font-semibold" id="movie-title">Movie Title</h2>
//     <p class="mb-2 text-sm text-gray-700">Release Date: January 1, 2023</p>
//     <p class="mb-4 text-sm text-gray-700">Director: John Doe</p>
//     <a href="#"
//       class="block rounded-lg bg-blue-500 px-4 py-2 text-center font-semibold text-white hover:bg-blue-600">Watch
//       Movie</a>
//     </div>

    let title = result.title
    document.getElementById('movie-title').innerHTML = title
    // localStorage.setItem('movies', JSON.stringify(response));
  })
  .catch(err => console.error(err));
} 

// // google books API key 

const fetchBooks = () =>{
    fetch('https://www.googleapis.com/auth/books', bookOptions)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
};


searchBtn.addEventListener('click', getInputValue)