import * as mongoDB from "mongodb";
import * as dotenv from "dotenv";
import mongoose from "mongoose";




export default class ConectDB{
    async connectToDatabase () {
    dotenv.config();
    mongoose.connect(process.env.DB_CONN_STRING as string)
    .then(()=> console.log(`Mongo connected on ${process.env.DB_CONN_STRING}`))
    .catch(err => console.log(`Connection has error ${err}`))
}
}

