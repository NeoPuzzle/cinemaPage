class Movie {
    constructor({title, director, year, duration, genre, rate, poster}) {
        if (!title || !director || !year || !duration || !genre || !rate || !poster) {
            throw new Error("All fields are required");
            }
            this.title = title;
            this.year = year;
            this.director = director;
            this.duration = duration;
            this.genre = genre;
            this.rate = rate;
            this.poster = poster;
        
    }
}

module.exports = {Movie};