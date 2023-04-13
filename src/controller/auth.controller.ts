import express, { Request, Response } from "express";
import { ObjectId } from "mongodb";
import { collections } from "../services/database.service";
import User from "../models/user";
import TokenService from "../services/token.service";
import * as bycrypt from "bcrypt";

class authController{
    async SingUser(req:Request ,res: Response): Promise<void>{
        try {
            const newUser: User = {
                userName: req.body.userName,
                password: req.body.password,
                email: req.body.email,
            };
            await collections.users?.insertOne(newUser).then((result) => {
                res.status(201).send(result);
            }).catch((error) => {res.status(400).send(error)});
    
        } catch (error) {
            console.error(error);
            res.status(400).send(error);
        }
        }
   


 async loginUser(req:Request ,res: Response): Promise<void>{
    try {
        await collections.users?.findOne({ userName: req.body.userName, password: req.body.password }).then((result) => {
            if(result){
                let token = TokenService.setToken(
                    result.email,
                    result.password,
                    result.userName,
                    process.env.SECRET as string,
                    { expiresIn: 2592e8 }
                  ); 
                res.status(200).send({ result, token });
            }else{
                res.status(400).send({message: "Usuario o contraseña incorrecta"});
            }
        }).catch((error) => {res.status(400).send(error)});

     } catch (error) {
         res.status(500).send(error);
     }
}
}
export = new authController();