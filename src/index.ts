import express from 'express';
import masterRouter from './routes/master.router';
import bodyParser from 'body-parser';
import { connectToDatabase } from "./services/database.service"



class Server {
    public app = express();
    public routes = masterRouter;
}

const server = new Server();


connectToDatabase()
    .then(() => {
        server.app.use(bodyParser.json());
        server.app.use("/", masterRouter);
        const port = process.env.PORT || 3000;
        server.app.listen(port, () => {
            console.log(`Server started at http://localhost:${port}`);
        });
    })
    .catch((error: Error) => {
        console.error("Database connection failed", error);
        process.exit();
    });