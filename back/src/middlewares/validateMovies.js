const validateParamQuery = (req, res, next) => {
    const { title } = req.body;

    if (!title) {
        return res.status(400).json({ error: 'El parámetro "title" es requerido.' });
    }

    next();
};

module.exports = validateParamQuery;