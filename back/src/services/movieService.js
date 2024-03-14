const axios = require('axios');

class Movie {
    constructor(title, year, director, duration, genre, rate, poster) {
        this.title = title;
        this.year = year;
        this.director = director;
        this.duration = duration;
        this.genre = genre;
        this.rate = rate;
        this.poster = poster;
    }
}

dataMovies = [];


const getMovies = async (req, res) => {
    try {
        const response = await axios.get('https://students-api.up.railway.app/movies');
        const movies = response.data.map(movieData => new Movie(movieData.title, movieData.director, movieData.year, movieData.duration, movieData.genre, movieData.rate, movieData.poster));
        res.status(200).send(movies);
    } catch (error) {
        res.status(500).json(error.message);  
        console.log("Error en el service", error.message);  
    }
}

const setMovies = async (req, res) => {
    try {
        const response = await axios.post('https://students-api.up.railway.app/movies', req.body);
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
