const Review = require('../models/reviews');

const addReview = async (user_id, game_id, rating, description) => {
    if (!rating) {
        throw new Error('Rating is required');
    }
    const review = await Review.create({ user_id, game_id, rating, description });
    return review;
};

const updateReview = async (user_id, game_id, rating, description) => {
    const review = await Review.findOne({ where: { user_id, game_id } });
    if (!review) {
        throw new Error('Review not found');
    }
    review.rating = rating;
    review.description = description;
    await review.save();
    return review;
};

const deleteReview = async (user_id, game_id) => {
    const review = await Review.findOne({ where: { user_id, game_id } });
    if (!review) {
        throw new Error('Review not found');
    }
    await review.destroy();
};

const getReviewById = async (user_id, game_id) => {
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

module.exports = {
    addReview,
    updateReview,
    deleteReview,
    getReviewById,
    getReviews
};
