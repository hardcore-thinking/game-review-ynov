const { Router } = require('express');
const genreController = require('../controllers/genres');

const router = Router();

router.post('/', genreController.addGenre);
router.delete('/:id', genreController.deleteGenre);
router.get('/:id', genreController.getGenreById);
router.get('/', genreController.getGenres);

module.exports = router;
