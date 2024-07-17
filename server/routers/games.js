const { Router } = require('express');
const gameController = require('../controllers/games');

const router = Router();

router.post('/', gameController.addGame);
router.delete('/:id', gameController.deleteGame);
router.get('/:id', gameController.getGameById);
router.get('/', gameController.getGames);
router.put('/:id', gameController.updateGameById);

module.exports = router;
