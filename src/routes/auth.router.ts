import express from 'express';
import {SingUser} from '../controller/auth.controller';
import {getUser} from '../controller/auth.controller';
const router = express.Router();

router.post('/sing-in', SingUser);
router.get('/', getUser);



export default router;