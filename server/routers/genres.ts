import { Router } from 'express';
import genreController from '../controllers/genres';

const router = Router();

router.post('/', genreController.addGenre);
router.delete('/:id', genreController.deleteGenre);
router.get('/:id', genreController.getGenreById);
router.get('/', genreController.getGenres);

export default router;
