const gameService = require('../services/games');

const addGame = async (req, res) => {
    try {
        const { name, developers, release_date, genre_id, platform_id } = req.body;
        const game = await gameService.addGame(name, developers, release_date, genre_id, platform_id);
        res.status(201).json(game);
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: error.message });
    }
};

const deleteGame = async (req, res) => {
    try {
        const { id } = req.params;
        await gameService.deleteGame(Number(id));
        res.status(204).send();
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: error.message });
    }
};

const getGameById = async (req, res) => {
    try {
        const { id } = req.params;
        const game = await gameService.getGameById(Number(id));
        res.status(200).json(game);
    } catch (error) {
        console.error(error);
        res.status(404).json({ error: error.message });
    }
};

const getGames = async (req, res) => {
    try {
        const games = await gameService.getGames();
        res.status(200).json(games);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
};

const updateGameById = async (req, res) => {
    try {
        const { id } = req.params;
        const updates = req.body;
        const game = await gameService.updateGameById(Number(id), updates);
        res.status(200).json(game);
    } catch (error) {
        console.error(error);
        res.status(404).json({ error: error.message });
    }
};

module.exports = {
    addGame,
    deleteGame,
    getGameById,
    getGames,
    updateGameById
};
