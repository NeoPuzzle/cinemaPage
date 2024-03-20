const Movie = require('../models/Movie');


const getMovies = async () => {
        const movies = await Movie.find();
        return movies;
};

const setMovies = async (newMovieData) => {
        const newMovie = new Movie(newMovieData);
        await newMovie.save();
        return newMovie;
};

module.exports = {
    getMovies,
    setMovies
};


