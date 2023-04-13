import { ObjectId } from "mongodb";
import { Schema, model } from 'mongoose';



 export interface IProduct {
    name: string;
    price: number;
    description: string;
    brand:string;
    category:string;
    _id?: ObjectId;
  }
  
  
  const productSchema = new Schema<IProduct>({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    brand: { type: String, required: true },
    category: { type: String, required: true },
  },
  {
    timestamps: false,
    versionKey: false,
  });
  
  export const Product = model<IProduct>('Prducts', productSchema);