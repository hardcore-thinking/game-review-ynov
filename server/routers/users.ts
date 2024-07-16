import { Router } from 'express';
import userController from '../controllers/users';

const router = Router();

router.post('/', userController.addUser);
router.delete('/:id', userController.deleteUserById);
router.get('/:id', userController.getUserById);
router.get('/', userController.getUsers);
router.put('/:id', userController.updateUserById);

export default router;
