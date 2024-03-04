//console.log(tempData);


const container = document.getElementById("container");

tempData.forEach(movie => {

    const card = document.createElement('div');
    card.classList.add("movie-card");

    card.innerHTML = `
    <img src="${movie.poster}" alt="${movie.title}" class="poster">
    <div class="movie-info">
        <h3>${movie.title} (${movie.year})</h3>
        <p><strong>Director:</strong> ${movie.director}</p>
        <p><strong>Duration:</strong> ${movie.duration}</p>
        <p><strong>Genero:</strong> ${movie.genre}</p>
        <p><strong>Rate:</strong> ${movie.rate}</p>
    </div>
    `;

    container.appendChild(card);
})
