import { Router } from 'express';

import { CreateUserControllers } from './controllers/user/CreateUserControllers';
import { AuthUserController } from './controllers/user/AuthUserController';



const router = Router();

router.post('/users', new CreateUserControllers().handle)
router.post('/session', new AuthUserController().handle)

export{router};
