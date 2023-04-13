import express from 'express';
import * as authController from '../controller/auth.controller';

const router = express.Router();

router.post('/sing-in', authController.SingUser);
router.get('/login', authController.login);



export default router;