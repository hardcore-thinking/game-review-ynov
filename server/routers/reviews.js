const { Router } = require('express');
const reviewController = require('../controllers/reviews');

const router = Router();

router.post('/', reviewController.addReview);
router.put('/:user_id/:game_id', reviewController.updateReview);
router.delete('/:user_id/:game_id', reviewController.deleteReview);
router.get('/:user_id/:game_id', reviewController.getReviewById);
router.get('/', reviewController.getReviews);

module.exports = router;
