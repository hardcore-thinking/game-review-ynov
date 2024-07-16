import { Request, Response } from 'express';
import genreService from '../services/genres';

const addGenre = async (req: Request, res: Response) => {
    try {
        const { name } = req.body;
        const genre = await genreService.addGenre(name);
        res.status(201).json(genre);
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: error.message });
    }
};

const deleteGenre = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        await genreService.deleteGenre(Number(id));
        res.status(204).send();
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: error.message });
    }
};

const getGenreById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const genre = await genreService.getGenreById(Number(id));
        res.status(200).json(genre);
    } catch (error) {
        console.error(error);
        res.status(404).json({ error: error.message });
    }
};

const getGenres = async (req: Request, res: Response) => {
    try {
        const genres = await genreService.getGenres();
        res.status(200).json(genres);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
};

export default {
    addGenre,
    deleteGenre,
    getGenreById,
    getGenres
};
