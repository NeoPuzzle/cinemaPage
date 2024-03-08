const {addMovieToContainer} = require("./models/cardsMovie")

const container = document.getElementById("container-movies");

$.get("https://students-api.2.us-1.fl0.io/movies", data => {
    addMovieToContainer(container, data)
});


