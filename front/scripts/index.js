const axios = require("axios");
const {addMovieToContainer} = require("./models/cardsMovie");

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
        console.log(error.message);
    }
    
}

fetchMovies();
//getMovies();




