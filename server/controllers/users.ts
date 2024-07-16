import { Request, Response } from 'express';
import userService from '../services/users';

const addUser = async (req: Request, res: Response) => {
    try {
        const { username, email, password, role } = req.body;
        const user = await userService.addUser(username, email, password, role);
        res.status(201).json(user);
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: error.message });
    }
};

const deleteUserById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        await userService.deleteUserById(Number(id));
        res.status(204).send();
    } catch (error) {
        console.error(error);
        res.status(404).json({ error: error.message });
    }
};

const getUserById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const user = await userService.getUserById(Number(id));
        res.status(200).json(user);
    } catch (error) {
        console.error(error);
        res.status(404).json({ error: error.message });
    }
};

const getUsers = async (req: Request, res: Response) => {
    try {
        const users = await userService.getUsers();
        res.status(200).json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
};

const updateUserById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const updates = req.body;
        const user = await userService.updateUserById(Number(id), updates);
        res.status(200).json(user);
    } catch (error) {
        console.error(error);
        res.status(404).json({ error: error.message });
    }
};

export default {
    addUser,
    deleteUserById,
    getUserById,
    getUsers,
    updateUserById
};
