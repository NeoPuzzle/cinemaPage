const axios = require("axios");
const {addMovieToContainer} = require("./models/cardsMovie");
const {savingData} = require("./models/formMovie");

console.log(savingData.saveData);

const container = document.getElementById("container-movies");

//Promesas..
// const getMovies = () => {
//     axios.get("https://students-api.up.railway.app/movies")
//     .then((response) =>{
//         addMovieToContainer(container, response.data);
//     })
//     .catch((error) => {
//         console.log(error.message);
//     })
// }

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
        console.log("Movie posted successfully:", response.data);
        return response.data;
    } catch (error) {
        throw new Error(error.message);
    }
};

fetchMovies();
postMovie(dataMovie.movieData);




