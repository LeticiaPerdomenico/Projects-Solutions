/*1*/
const tmdbKey = 'f0fb0f0b00rrrf1234a8aaaa00a0a000';
/*2*/
const tmdbBaseUrl = 'https://api.themoviedb.org/3';
const playBtn = document.getElementById('playBtn');
/*6*/
const getGenres = async () => {
    /*3*/
    const genderRequestEndpoint = '/genre/movie/list';
    /*4*/
    const requestParams = `?api_key = ${tmdbKey}`;
    /*5*/
    const urlToFetch = tmdbBaseUrl + genderRequestEndpoint + requestParams;
    /*7*/
    try {
        /*8*/
        const response = await fetch(urlToFetch);
        /*9*/
        if (response.ok) {
            /*10*/
            const jsonResponse = await response.json();
            const genres = jsonResponse.genres;
            /*11*/
            /*console.log(jsonResponse);
            console.log(genres);*/
            /*12*/
            return genres;
        }
    }
    catch (error) {
        console.log(error);
    }
};
/*console.log(getGenres);*/
/*15*/
const getMovies = async () => {
    const selectedGenre = getSelectedGenre();
    /*13*/
    const discoverMovieEndpoint = '/discover/movie';
    /*14*/
    const requestParams = `?api_key=${tmdbKey}&with_genres=${selectedGenre}`;
    const urlToFetch = tmdbBaseURL + discoverMovieEndpoint + requestParams;
    try {
        const response = await fetch(urlToFetch);
        /*16*/
        if (response.ok) {
            const jsonResponse = await response.json();
            /*17*/
            const movies = jsonResponse.results;
            /*console.log(jsonResponse);
            console.log(movies);*/
            return movies;
        }
    }
    catch (error) {
        console.log(error);
    }
};
/*console.log(getMovies);*/
/*18*/
const getMovieInfo = async (movie) => {
    const movieId = movie.id;
    /*19*/
    const movieEndpoint = `/movie/${movieId}`;
    /*20*/
    const requestParams = `?api_key=${tmdbKey}`;
    const urlToFetch = tmdbBaseUrl + movieEndpoint + requestParams;
    /*21*/
    try {
        const response = await fetch(urlToFetch);
        /*22*/
        if (response.ok) {
            const jsonResponse = await response.json();
            const movieInfo = jsonResponse;
            /*23*/
            return movieInfo;
        }
    }
    catch (error) {
        console.log(error);
    }
};

// Gets a list of movies and ultimately displays the info of a random movie from the list
/*24*/
const showRandomMovie = async () => {
    const movieInfo = document.getElementById('movieInfo');
    if (movieInfo.childNodes.length > 0) {
        clearCurrentMovie();
    };
    const movies = await getMovies();
    /*25*/
    const randomMovie = getRandomMovie(movies);
    /*26*/
    const info = await getMovieInfo(randomMovie);
    /*27*/
    displayMovie(info);
};

getGenres().then(populateGenreDropdown);
playBtn.onclick = showRandomMovie;