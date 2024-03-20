module.exports = {
    entry:{
        index: "./scripts/index.js",
        news: "./scripts/news.js",
        film: "./scripts/models/formMovie.js",
    },

    output: {
        path: __dirname + "/public",
        filename: "[name].js",
    },
};