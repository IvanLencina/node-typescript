import * as express from 'express';

export class Router {
  public router = express.Router();

  constructor(private app: express.Application) {
    this.app = app;
    this.intializeRoutes();
  }

  public intializeRoutes() {
    this.app.route('/')
      .get((request: express.Request, response: express.Response) => {
        response.send('Welcome to the node + typescript example');
      });
  }
}