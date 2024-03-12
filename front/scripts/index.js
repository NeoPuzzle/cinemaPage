const axios = require("axios");
const {addMovieToContainer} = require("./models/cardsMovie");

const container = document.getElementById("container-movies");

const fetchMovies = async () => {
    try {
        const data = await axios.get("https://students-api.up.railway.app/movies");
        addMovieToContainer(container, data.data);
    } catch (error) {
        console.log(error.message);
    }
    
}

fetchMovies();


