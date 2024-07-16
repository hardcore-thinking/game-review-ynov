import { Request, Response } from 'express';
import authService from '../services/auth';

const register = async (req: Request, res: Response) => {
    try {
        const { username, email, password, role } = req.body;
        const user = await authService.registerUser(username, email, password, role);
        res.status(201).json(user);
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: error.message });
    }
};

const login = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;
        const { user, token } = await authService.loginUser(email, password);
        res.status(200).json({ user, token });
    } catch (error) {
        console.error(error);
        res.status(401).json({ error: error.message });
    }
};

const logout = async (req: Request, res: Response) => {
    res.status(200).json({ message: 'Logged out successfully' });
};

export default {
    register,
    login,
    logout
};