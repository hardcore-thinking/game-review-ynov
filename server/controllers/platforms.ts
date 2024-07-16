import { Request, Response } from 'express';
import platformService from '../services/platforms';

const addPlatform = async (req: Request, res: Response) => {
    try {
        const { name } = req.body;
        const platform = await platformService.addPlatform(name);
        res.status(201).json(platform);
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: error.message });
    }
};

const deletePlatform = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        await platformService.deletePlatform(Number(id));
        res.status(204).send();
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: error.message });
    }
};

const getPlatformById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const platform = await platformService.getPlatformById(Number(id));
        res.status(200).json(platform);
    } catch (error) {
        console.error(error);
        res.status(404).json({ error: error.message });
    }
};

const getPlatforms = async (req: Request, res: Response) => {
    try {
        const platforms = await platformService.getPlatforms();
        res.status(200).json(platforms);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
};

export default {
    addPlatform,
    deletePlatform,
    getPlatformById,
    getPlatforms
};
