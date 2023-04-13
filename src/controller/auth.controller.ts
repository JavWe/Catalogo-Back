import express, { Request, Response } from "express";
import { ObjectId } from "mongodb";
import { collections } from "../services/database.service";
import User from "../models/user";


    
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


export async function getUser(req:Request ,res: Response): Promise<void>{
    try {
        const users = (await collections.users?.find({}).toArray()) as unknown as User[];
 
         res.status(200).send(users);
     } catch (error) {
         res.status(500).send(error);
     }
}
