const axios = require('axios');

class Movie {
    constructor(title, director, year, duration, genre, rate, poster) {
        this.title = title;
        this.year = year;
        this.director = director;
        this.duration = duration;
        this.genre = genre;
        this.rate = rate;
        this.poster = poster;
    }
}

let dataMovies = [];

const movieInstance = (movieData) => {
    const { title, director, year, duration, genre, rate, poster } = movieData;
    return new Movie(title, director, year, duration, genre, rate, poster);
}


const getMovies = async (req, res) => {
    try {
        const response = await axios.get('https://students-api.up.railway.app/movies');
        dataMovies = response.data.map(movie => movieInstance(movie));
        res.status(200).send(dataMovies);
    } catch (error) {
        res.status(500).json(error.message);  
        console.log("Error en el service", error.message);  
    }
}

const setMovies = async (req, res) => {
    try {
        const newMovieData = req.body;
        const newMovie = movieInstance(newMovieData);
        const response = await axios.post('https://students-api.up.railway.app/movies', req.body);
        dataMovies.push(newMovie);
        res.status(200).send(response.data);
    } catch (error) {
        res.status(500).json(error.message);  
        console.log("Error en el service", error.message);  
    }
}



module.exports = { 
    getMovies,
    setMovies
}


