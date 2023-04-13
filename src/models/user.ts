import { ObjectId } from "mongodb";
import { Schema, model } from 'mongoose';



 export interface IUser {
    userName: string;
    email: string;
    password: string;
    _id?: ObjectId;
  }
  
  
  const userSchema = new Schema<IUser>({
    userName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
  },
  {
    timestamps: false,
    versionKey: false,
  });
  
  export const User = model<IUser>('Users', userSchema);

