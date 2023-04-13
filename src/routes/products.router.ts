import {Router} from 'express';
import productsController from '../controller/products.controler';



class ProductsRouter{
    private _router = Router();
    private _productsController = productsController;

    get router() {
        return this._router;
      }
    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/', this._productsController.getAllPRoducts);
        this.router.post('/create', this._productsController.postOneProduct);
        this.router.delete('/delete', this._productsController.deleteOneProduct);
        this.router.get('/getone', this._productsController.getOneProduct);
    }
}

export = new ProductsRouter().router;