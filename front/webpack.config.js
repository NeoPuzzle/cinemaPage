module.exports = {
    entry:['./scripts/index.js', './scripts/news.js'],

    output: {
        path: __dirname + "/public",
        filename: "bundle.js",
    },
};