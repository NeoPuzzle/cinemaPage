function moviesValidation(movieObject) {
    if (!movieObject.title || !movieObject.director || !movieObject.year) {
        throw new Error("All fields are required");
        }


    return true;


}

module.exports = moviesValidation;