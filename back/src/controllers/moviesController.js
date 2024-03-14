// module.exports = {
//     getMovies: async (req, res) => {
//         res.status(200).send("próximamente estarán disponibles los datos de películas")
//     },
// }

const getMoviesService = require("../services/movieService");


const getClientMovies = async (req, res) => {
    try {
        const response = await getMoviesService.getMovies(req, res);
        res.status(200).send(response);
    } catch (error) {
        console.log("Error en el controller", error.message);
        res.status(500).json({error: error.message});  
    }
}

const setClientMovies = async (req, res) => {
    try {
        const response = await getMoviesService.setMovies(req, res);
        res.status(200).send(response);
    } catch (error) {
        console.log("Error en el controller", error.message);
        res.status(500).json({error: error.message});  
    } 

}

module.exports = {
    getClientMovies,
    setClientMovies
}