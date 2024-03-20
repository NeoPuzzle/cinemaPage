function formatTimeCardMovie(time) {
    const [hour, minute] = time.split(':');
    return `${hour}h ${minute}min`;
}

module.exports = formatTimeCardMovie;