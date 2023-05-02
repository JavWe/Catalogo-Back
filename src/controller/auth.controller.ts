import { Request, Response } from "express";
import {User , IUser} from "../models/user";
import TokenService from "../services/token.service";


class authController{
    SingUser(req:Request ,res: Response){
        try {
            const newUser: IUser = {
                userName: req.body.userName,
                password: req.body.password,
                email: req.body.email,
            };

           User.create(newUser).then((result) => {
               res.status(200).send(result);
           }).catch((error) => {res.status(400).send(error)});
        
    
        } catch (error) {
            console.error(error);
            res.status(400).send(error);
        }
        }
   


 async loginUser(req:Request ,res: Response): Promise<void>{
    try {
        User.findOne({email: req.body.email , password: req.body.password}).then((result) => {
            if(result){
                let token = TokenService.setToken(
                    result.email,
                    result.password,
                    result.userName,
                    process.env.SECRET as string,
                    { expiresIn: 2592e8 }
                  ); 
               
                res.status(200).send({ userName:result.userName, token });
            }else{
                res.status(400).send("User not found");
            }
        })

     } catch (error) {
         res.status(500).send(error);
     }
}
}
export = new authController();