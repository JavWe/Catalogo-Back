import {Router} from 'express';
import authRouter from './auth.router';



    const router = Router();
    const _authRouter = authRouter;

    router.use("/auth", _authRouter);




export default router;