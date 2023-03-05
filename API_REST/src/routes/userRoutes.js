import { Router } from 'express';
import userController from '../controllers/UserController';

const router = new Router();

router.post('/', userController.store);
export default router;

/*
  index -> show all users -> GET
  store/create -> create a user -> POST
  delete -> delete a user -> DELETE
  show -> show a usar -> GET
  update -> update a usar -> PATCH or PUT
*/
