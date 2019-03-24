import * as express from 'express';
import {ExampleController} from "./controllers/example.controller";

export class Router {
  public router = express.Router();

  constructor(
    private app: express.Application,
    private exampleController: ExampleController
  ) {
    this.app = app;
    this.intializeRoutes();
  }

  public intializeRoutes() {
    this.app.route('/')
      .get((request: express.Request, response: express.Response) => {
        response.send('Welcome to the node + typescript example');
      });

    this.app.route('/examples')
      .get(this.exampleController.getAll.bind(this.exampleController))
      .post(this.exampleController.create.bind(this.exampleController))
  }
}