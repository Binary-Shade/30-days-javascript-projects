// binary shade

const btn = document.getElementById('search-btn');
const movie_name = document.getElementById('movie-name');
const result = document.getElementById('result');

btn.addEventListener('click', ()=>{
    if(movie_name.value.length > 0){
        getMovie();
    }else{
        result.innerHTML = "<h3 class='msg'>Enter a valid movie name </h3>";
    }
})


const getMovie = async () => {
    console.log(movie_name.value);
    const key = '389107f';
    const url = `http://www.omdbapi.com/?t=${movie_name.value}&apikey=${key}`;
    let data = await fetch(url);
    let response = await data.json();
    console.log(response);
    if(response){
        result.innerHTML = `
        <div class='info'>
        <img src=${response.Poster} alt='${response.Title}' class='Poster' />
        </div>
        <h2>${response.Title} </h2>
        <div class='rating'>
        <i class="fa-solid fa-star" style='color: #cf9b35'></i>
        <h4>${response.imdbRating}</h4>
        </div>
        <div class="details">
        <span>${response.Rated}</span>
        <span>${response.Year}</span>
        <span>${response.Runtime}</span>
        </div>
        <div class="genre">
        <div>${response.Genre.split(",").join("</div><div>")}</div>
        </div>
        </div>
        </div>
        <h3>Plot:</h3>
        <p>${response.Plot}</p>
        <h3>Cast:</h3>
        <p>${response.Actors}</p>
        `;
    }else{
        result.innerHTML = `<h3 class='msg'>${response.Error}</h3>`;
    }
}
// window.addEventListener('load', getMovie);