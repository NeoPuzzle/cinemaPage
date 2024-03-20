const axios = require("axios");
const {addMovieToContainer} = require("./models/cardsMovie");

const container = document.getElementById("container-movies");

const fetchMovies = async () => {
    try {
        const data = await axios.get("http://localhost:3000/movies");
        addMovieToContainer(container, data.data);
    } catch (error) {
        throw new Error(error.message);
    }
    
}

const postMovie = async (movieData) => {
    try {
        const response = await axios.post("http://localhost:3000/movies", movieData);
        return response.data;
    } catch (error) {
        throw new Error(error.message); 
    }
}

fetchMovies();

module.exports = {
    postMovie
}




