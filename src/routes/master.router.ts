import {Router} from 'express';
import authRouter from './auth.router';
import ProductsRouter from './products.router';



class MasterRouter {
    private _router = Router();
    private _authRouter = authRouter
    private _productsRouter = ProductsRouter



    get router() {
        return this._router;
      }
    
      constructor() {
        this._configure();
      }

    private _configure() {  
    this._router.use("/auth", this._authRouter);
    this._router.use("/products", this._productsRouter);

    }

}


export = new MasterRouter();
