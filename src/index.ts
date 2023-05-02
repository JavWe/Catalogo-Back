import express from 'express';
import MasterRouter from './routes/master.router';
import bodyParser from 'body-parser';
import ConectDB from './services/database.service';
import cors from 'cors';


class Server {
    public app = express();
    public routes = MasterRouter;
}

const server = new Server();
const db = new ConectDB();


const options: cors.CorsOptions = {
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    // preflightContinue: false,
    optionsSuccessStatus: 204,
  };

server.app.use(cors(options));
server.app.use(bodyParser.json());
server.app.use("/", server.routes.router);
const port = process.env.PORT || 3000;
server.app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});


db.connectToDatabase();