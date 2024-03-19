// module.exports = {
//     getMovies: async (req, res) => {
//         res.status(200).send("próximamente estarán disponibles los datos de películas")
//     },
// }

const getMoviesService = require("../services/movieService");


const getClientMovies = async (req, res) => {
    try {
        const response = await getMoviesService.getMovies();
        res.status(200).json(response);
    } catch (error) {
        res.status(500).send({error: error.message});  
    }
}

// const setClientMovies = async (req, res) => {
//     try {
//         const response = await getMoviesService.setMovies(req.body);
//         res.status(200).send(response);
//     } catch (error) {
//         res.status(500).json({error: error.message});  
//     } 

// }

module.exports = {
    getClientMovies,
    //setClientMovies
}