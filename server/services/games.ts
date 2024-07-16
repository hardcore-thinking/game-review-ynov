import Game from '../models/games';

const addGame = async (name: string, developers: string, release_date: Date, genre_id: number, platform_id: number) => {
    if (!name || !developers || !release_date || !genre_id || !platform_id) {
        throw new Error('All fields are required');
    }
    const game = await Game.create({ name, developers, release_date, genre_id, platform_id });
    return game;
};

const deleteGame = async (id: number) => {
    const game = await Game.findByPk(id);
    if (!game) {
        throw new Error('Game not found');
    }
    await game.destroy();
};

const getGameById = async (id: number) => {
    const game = await Game.findByPk(id);
    if (!game) {
        throw new Error('Game not found');
    }
    return game;
};

const getGames = async () => {
    const games = await Game.findAll();
    return games;
};

const updateGameById = async (id: number, updates: Partial<{ name: string; developers: string; release_date: Date; genre_id: number; platform_id: number; }>) => {
    const game = await Game.findByPk(id);
    if (!game) {
        throw new Error('Game not found');
    }
    Object.assign(game, updates);
    await game.save();
    return game;
};

export default {
    addGame,
    deleteGame,
    getGameById,
    getGames,
    updateGameById
};
