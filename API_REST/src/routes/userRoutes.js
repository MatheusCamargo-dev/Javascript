import { Router } from 'express';
import userController from '../controllers/UserController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.get('/', loginRequired, userController.index);
router.get('/:id', userController.show);

router.post('/', userController.store);
router.put('/', loginRequired, userController.update);
router.delete('/', loginRequired, userController.delete);
export default router;

/*
  index -> show all users -> GET
  store/create -> create a user -> POST
  delete -> delete a user -> DELETE
  show -> show a usar -> GET
  update -> update a usar -> PATCH or PUT
*/
