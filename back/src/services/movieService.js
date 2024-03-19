// require("dotenv").config();
// const { BASE_URL } = process.env
// const axios = require('axios');
// const {Movie} = require('../models/moviesClass');
// const moviesValidation = require('../utils/validaciones/moviesValidation');

// let dataMovies = [];


// const getMovies = async () => {
//     try {
//         const {data: apiMovies} = await axios.get(BASE_URL);
//         const moviesFromApi  = apiMovies.map(movie => new Movie(movie));
//         const allMovies = [...dataMovies, ...moviesFromApi];
//         return allMovies;
//     } catch (error) {
//         throw new Error(error.message); 
//     }
// }

// const setMovies = async (newMovieData) => {
//     try {
//         const newMovie = new Movie(newMovieData);
//         dataMovies.push(newMovie);
//         return newMovie; 
//     } catch (error) {
//         throw new Error(error.message); 
//     }
// }



// module.exports = { 
//     getMovies,
//     setMovies
// }


const Movie = require('../models/Movie');

module.exports = {
    getMovies: async () => {
        try {
            const movies = await Movie.find();
            return movies;
        } catch (error) {
            throw new Error(error.message);
        }
    },
    // setMovies: async (newMovieData) => {
    //     try {
    //         const newMovie = new Movie(newMovieData);
    //         await newMovie.save();
    //         return newMovie;
    //     } catch (error) {
    //         throw new Error(error.message);
    //     }
    // }
};

