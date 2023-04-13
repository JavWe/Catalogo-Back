import express, { Request, Response } from "express";
import { ObjectId } from "mongodb";
import { collections } from "../services/database.service";
import User from "../models/user";
import TokenService from "../services/token.service";


    
export async function SingUser(req:Request ,res: Response): Promise<void>{
    try {
        const newUser = req.body as User;
        const result = await collections.users?.insertOne(newUser);

        result
            ? res.status(201).send(`Successfully created a new user`)
            : res.status(500).send("Failed to create a new game.");
    } catch (error) {
        console.error(error);
        res.status(400).send(error);
    }
    }


export async function login(req:Request ,res: Response): Promise<void>{
    try {
        const user = (await collections.users?.findOne({ userName: req.body.userName, password: req.body.password }) as unknown as User)
        if(!user){
            res.status(404).send("User not found")
        }else{
            let token = TokenService.setToken(
                user.email,
                user.password,
                user.userName,
                process.env.SECRET as string,
                { expiresIn: 2592e8 }
              ); 
              res.status(200).send({ user, token });
        } ;

     } catch (error) {
         res.status(500).send(error);
         console.log(error)
     }
}
