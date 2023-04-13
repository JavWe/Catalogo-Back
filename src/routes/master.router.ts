import {Router} from 'express';
import authRouter from './auth.router';

class MasterRouter {
    private _router = Router();
    private _authRouter = authRouter
    get router() {
        return this._router;
      }
    
      constructor() {
        this._configure();
      }

    private _configure() {  
    this._router.use("/auth", this._authRouter);

    }

}


export = new MasterRouter();
