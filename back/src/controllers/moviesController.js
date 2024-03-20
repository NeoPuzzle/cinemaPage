const catchAsync = require("../utils/catchAsync");

const getMoviesService = require("../services/movieService");


const getClientMovies = async (req, res) => {
        const response = await getMoviesService.getMovies();
        res.status(200).json(response);
}

const setClientMovies = async (req, res) => {
        const response = await getMoviesService.setMovies(req.body);
        res.status(201).send(response);

    }

module.exports = {
    getClientMovies: catchAsync(getClientMovies),
    setClientMovies: catchAsync(setClientMovies)
};

