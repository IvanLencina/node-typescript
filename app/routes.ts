import * as express from 'express';
import {ExampleController} from "./controllers/example.controller";
import bodyParser from "body-parser";

export class Router {
  public router = express.Router();

  constructor(
    private app: express.Application,
    private exampleController: ExampleController
  ) {
    this.app = app;

    this.initializeMiddlewares();
    this.intializeRoutes();
  }

  private initializeMiddlewares() {
    this.app.use(bodyParser.json())
  }

  private intializeRoutes() {
    this.app.route('/')
      .get((request: express.Request, response: express.Response) => {
        response.send('Welcome to the node + typescript example');
      });

    this.app.route('/examples')
      .get(this.exampleController.getAll.bind(this.exampleController))
      .post(this.exampleController.create.bind(this.exampleController))
  }
}