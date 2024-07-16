import Review from '../models/reviews';

const addReview = async (user_id: number, game_id: number, rating: number, description?: string) => {
    if (!rating) {
        throw new Error('Rating is required');
    }
    const review = await Review.create({ user_id, game_id, rating, description });
    return review;
};

const updateReview = async (user_id: number, game_id: number, rating: number, description?: string) => {
    const review = await Review.findOne({ where: { user_id, game_id } });
    if (!review) {
        throw new Error('Review not found');
    }
    review.rating = rating;
    review.description = description;
    await review.save();
    return review;
};

const deleteReview = async (user_id: number, game_id: number) => {
    const review = await Review.findOne({ where: { user_id, game_id } });
    if (!review) {
        throw new Error('Review not found');
    }
    await review.destroy();
};

const getReviewById = async (user_id: number, game_id: number) => {
    const review = await Review.findOne({ where: { user_id, game_id } });
    if (!review) {
        throw new Error('Review not found');
    }
    return review;
};

const getReviews = async () => {
    const reviews = await Review.findAll();
    return reviews;
};

export default {
    addReview,
    updateReview,
    deleteReview,
    getReviewById,
    getReviews
};
