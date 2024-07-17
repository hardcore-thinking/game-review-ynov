const { Router } = require('express');
const platformController = require('../controllers/platforms');

const router = Router();

router.post('/', platformController.addPlatform);
router.delete('/:id', platformController.deletePlatform);
router.get('/:id', platformController.getPlatformById);
router.get('/', platformController.getPlatforms);

module.exports = router;
