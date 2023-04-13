import express, { Request, Response } from "express";
import { Product, IProduct } from "../models/products";
import TokenService from "../services/token.service";

class productsController {
  getAllPRoducts(req: Request, res: Response) {
    if (req.headers.token) {
      let token = req.headers.token as string;
      let user = TokenService.veryfyToken(token, process.env.SECRET as string);
      if (user) {
        Product.find()
          .then((result) => {
            res.status(200).send(result);
          })
          .catch((error) => {
            res.status(400).send(error);
          });
      } else {
        res.status(400).send("User not found");
      }
    }else{
        res.status(400).send("No token found");
    }
  }

  getOneById(req: Request, res: Response) {
    Product.findById(req.query.id).then((result) => {
      res.status(200).send(result);
    });
  }

  getAllCategory(req: Request, res: Response) {
    Product.find({category: req.query.category}).then((result) => {
      res.status(200).send(result);
    });
  }


  postOneProduct(req: Request, res: Response) {
    Product.insertMany(req.body).then((result) => {
      res.status(200).send(result);
    });
  }

  deleteOneProduct(req: Request, res: Response) {
    Product.findByIdAndDelete(req.body._id).then((result) => {
      res.status(200).send(result);
    });
  }

}

export = new productsController();