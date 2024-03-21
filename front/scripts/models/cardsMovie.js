function createMovie(movie) {
    const cards = document.createElement('div');
        cards.classList.add("cards");
    
        cards.innerHTML = `
        <div class="face front">
        <img src="${movie.poster}" alt="${movie.title}">
        </div>
        <div class="face back">
            <h3>${movie.title} (${movie.year})</h3>
            <p><strong>Director:</strong> ${movie.director}</p>
            <p><strong>Duration:</strong> ${movie.duration}</p>
            <p><strong>Genero:</strong> ${movie.genre.join(', ')}</p>
            <p><strong>Rate:</strong> ${movie.rate}</p>
        </div>
        `;

        return cards;
}

function addMovieToContainer(container, movies) {
    movies.forEach(movie => {
        const cards = createMovie(movie)
        container?.appendChild(cards);
    });
}

module.exports = {
    addMovieToContainer: addMovieToContainer
};