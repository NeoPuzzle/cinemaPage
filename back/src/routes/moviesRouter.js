const { Router } = require("express");
const moviesController = require("../controllers/moviesController");
const validateParam = require("../middlewares/validateMovies");

const moviesRouter = Router();

moviesRouter.get("/", moviesController.getClientMovies);
//moviesRouter.post("/", validateParam, moviesController.setClientMovies);

module.exports = moviesRouter;