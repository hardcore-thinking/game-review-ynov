const Genre = require('../models/genres');

const addGenre = async (name) => {
    if (!name) {
        throw new Error('Name is required');
    }
    const genre = await Genre.create({ name });
    return genre;
};

const deleteGenre = async (id) => {
    const genre = await Genre.findByPk(id);
    if (!genre) {
        throw new Error('Genre not found');
    }
    await genre.destroy();
};

const getGenreById = async (id) => {
    const genre = await Genre.findByPk(id);
    if (!genre) {
        throw new Error('Genre not found');
    }
    return genre;
};

const getGenres = async () => {
    const genres = await Genre.findAll();
    return genres;
};

module.exports = {
    addGenre,
    deleteGenre,
    getGenreById,
    getGenres
};
