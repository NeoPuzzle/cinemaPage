const validateParam = (req, res, next) => {
    const { title, director, year, duration, genre, rate, poster } = req.body;

    if (!title || !director || !year || !duration || !genre || !rate || !poster) {
        throw new Error("All fields are required");
        }

    next();
};

module.exports = validateParam;