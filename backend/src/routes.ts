import { Router } from 'express';

import { CreateUserControllers } from './controllers/user/CreateUserControllers';
import { AuthUserController } from './controllers/user/AuthUserController';
import{DetailuserController} from './controllers/user/DetailUserController'
import { isAuthenticated } from '../middlewares/isAuthenticated';

const router = Router();

router.post('/users', new CreateUserControllers().handle)
router.post('/session', new AuthUserController().handle)
router.post('/me', new DetailuserController().handle)

export{router};
