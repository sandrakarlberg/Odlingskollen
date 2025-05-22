import express from 'express';
import dotenv from 'dotenv';

import getAllUsers from './getAllUsersRoute.js';
import createUser from './createUserRoute.js';
import userLogin from './userLoginRoute.js';

dotenv.config();

const router = express.Router();

router.use(getAllUsers);
router.use(createUser);
router.use(userLogin);

export default router;
