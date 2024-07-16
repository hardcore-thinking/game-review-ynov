import { Router } from 'express';
import platformController from '../controllers/platforms';

const router = Router();

router.post('/', platformController.addPlatform);
router.delete('/:id', platformController.deletePlatform);
router.get('/:id', platformController.getPlatformById);
router.get('/', platformController.getPlatforms);

export default router;
