//console.log(tempData);

function createMovie(movie) {
    const card = document.createElement('div');
        card.classList.add("movie-card");
    
        card.innerHTML = `
        <img src="${movie.poster}" alt="${movie.title}" class="poster">
        <div class="movie-info">
            <h3>${movie.title} (${movie.year})</h3>
            <p><strong>Director:</strong> ${movie.director}</p>
            <p><strong>Duration:</strong> ${movie.duration}</p>
            <p><strong>Genero:</strong> ${movie.genre.join(', ')}</p>
            <p><strong>Rate:</strong> ${movie.rate}</p>
        </div>
        `;

        return card;
}

function addMovieToContainer(container, movies) {
    movies.forEach(movie => {
        const card = createMovie(movie)
        container.appendChild(card);
    });
}


const container = document.getElementById("container");

$.get("https://students-api.2.us-1.fl0.io/movies", data => {
    //console.log(data);
    addMovieToContainer(container, data)
});


