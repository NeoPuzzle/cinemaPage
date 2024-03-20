document.addEventListener('DOMContentLoaded', () => {
    const btnClear = document.getElementById('btnClear');
    const btnSave = document.getElementById('btnSave');

    btnSave.addEventListener('click', saveData());


    btnClear.addEventListener('click', function(event) {
    event.preventDefault();
    clearData();
    });

    function saveData() {
        const inputTitle = document.getElementById('inputTitle').value;
        const inputYear = document.getElementById('inputYear').value;
        const inputDuration = document.getElementById('inputDuration').value;
        const inputDirector = document.getElementById('inputDirector').value;
        const inputGenre = document.getElementById('inputGenre').value;
        const inputRate = document.getElementById('inputRate').value;
        const inputPoster = document.getElementById('inputPoster').value;

        return {
            title: inputTitle,
            year: inputYear,
            duration: inputDuration,
            director: inputDirector,
            genre: inputGenre,
            rate: inputRate,
            poster: inputPoster,
        };
        
    }

    

    function clearData() {;
        document.getElementById('inputTitle').value = "";
        document.getElementById('inputYear').value = "";
        document.getElementById('inputDuration').value = "";
        document.getElementById('inputDirector').value = "";
        document.getElementById('inputGenre').value = "";
        document.getElementById('inputRate').value = "";
        document.getElementById('inputPoster').value = "";
    }

});
    
module.exports = {
    saveData: saveData
};












