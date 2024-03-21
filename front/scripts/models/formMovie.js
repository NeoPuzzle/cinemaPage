const genres = require('../data/dataGenre');
const { postMovie } = require('../index');
const formatTimeCardMovie = require('../helpers/formatTime');



const btnSave = document.getElementById('btnSave');
const inputGenre = document.getElementById('inputGenre');
const inputTitle = document.getElementById('inputTitle');
const inputYear = document.getElementById('inputYear');
const inputDirector = document.getElementById('inputDirector');
const inputDuration = document.getElementById('inputDuration');
const inputRate = document.getElementById('inputRate');
const inputPoster = document.getElementById('inputPoster');

function renderGenre() {
    inputGenre.innerHTML = '';

    for (const genre of genres) {
        const input = document.createElement('input');
        const label = document.createElement('label');

        input.type = 'checkbox';
        input.id = genre;
        input.name = "genre[]";
        input.value = genre;

        label.htmlFor = genre;
        label.textContent = genre;

        inputGenre.appendChild(input);
        inputGenre.appendChild(label);
    }
}

renderGenre();

function validateCheckbox() {
    const checkboxes = document.querySelectorAll('input[name="genre[]"]');
    const selectedGenres = [];

    for (const item of checkboxes) {
        if (item.checked) {
            selectedGenres.push(item.value);
        }
    }

    return selectedGenres;
}

function handlerSave(event) {
    event.preventDefault();

    const genres = validateCheckbox();

    const requiredFields = [inputTitle.value, inputYear.value, inputDuration.value, inputDirector.value, inputRate.value, inputPoster.value, genres];
    if (!requiredFields.every(Boolean)) {
        return alert('Please fill all the fields');
    }

    const formattedDuration = formatTimeCardMovie(inputDuration.value);

    const movieData = {
        title: inputTitle.value,
        year: inputYear.value,
        director: inputDirector.value,
        duration: formattedDuration,
        rate: inputRate.value,
        poster: inputPoster.value,
        genre: genres
    };

    postMovie(movieData)
        .then(() => {
            alert('Movie added successfully');
        })
        .catch((error) => {
            alert('Failed to add movie. Please try again later.');
        });
}

function clearData() {
    inputTitle.value = '';
    inputYear.value = '';
    inputDuration.value = '';
    inputDirector.value = '';
    inputRate.value = '';
    inputPoster.value = '';

    const checkboxes = document.querySelectorAll('input[name="genre[]"]');

    for (const item of checkboxes) {
        item.checked = false;
    }
}

btnSave.addEventListener('click', handlerSave);
btnClear.addEventListener('click', clearData);










