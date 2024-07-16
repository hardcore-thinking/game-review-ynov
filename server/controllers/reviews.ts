import { Request, Response } from 'express';
import reviewService from '../services/reviews';

const addReview = async (req: Request, res: Response) => {
    try {
        const { user_id, game_id, rating, description } = req.body;
        const review = await reviewService.addReview(user_id, game_id, rating, description);
        res.status(201).json(review);
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: error.message });
    }
};

const updateReview = async (req: Request, res: Response) => {
    try {
        const { user_id, game_id } = req.params;
        const { rating, description } = req.body;
        const review = await reviewService.updateReview(Number(user_id), Number(game_id), rating, description);
        res.status(200).json(review);
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: error.message });
    }
};

const deleteReview = async (req: Request, res: Response) => {
    try {
        const { user_id, game_id } = req.params;
        await reviewService.deleteReview(Number(user_id), Number(game_id));
        res.status(204).send();
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: error.message });
    }
};

const getReviewById = async (req: Request, res: Response) => {
    try {
        const { user_id, game_id } = req.params;
        const review = await reviewService.getReviewById(Number(user_id), Number(game_id));
        res.status(200).json(review);
    } catch (error) {
        console.error(error);
        res.status(404).json({ error: error.message });
    }
};

const getReviews = async (req: Request, res: Response) => {
    try {
        const reviews = await reviewService.getReviews();
        res.status(200).json(reviews);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
};

export default {
    addReview,
    updateReview,
    deleteReview,
    getReviewById,
    getReviews
};
