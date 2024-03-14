const { Router } = require("express");
const moviesController = require("../controllers/moviesController");
const validateParamQuery = require("../middlewares/validateMovies");

const moviesRouter = Router();

moviesRouter.get("/", moviesController.getClientMovies);
moviesRouter.post("/", validateParamQuery, moviesController.setClientMovies);

module.exports = moviesRouter;