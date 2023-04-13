import {Router} from 'express';
import authController from "../controller/auth.controller";


class AuthRouter{
    private _router = Router();
    private authController = authController;

    get router() {
        return this._router;
      }
    constructor(){
        this.config();
    }

    config(): void{
        this.router.post('/sing-in', authController.SingUser);
        this.router.post('/login', authController.loginUser);
    }
}







export = new AuthRouter().router;