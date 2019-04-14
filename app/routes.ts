import * as express from 'express';
import {ExampleController} from "./controllers/example.controller";
import {UserController} from "./controllers/UserController";
import bodyParser from "body-parser";
import {App} from "./app";
import {inject, injectable} from "inversify";
import {IRouter} from "./interfaces/router.interface";

@injectable()
export class Router implements IRouter {
  private appInstance = express.application;
  private exampleController: ExampleController;
  private userController: UserController;

  constructor(
    @inject(ExampleController) exampleController: ExampleController,
    @inject(UserController) userController: UserController
  ) {
    this.exampleController = exampleController;
    this.userController = userController;
  }

  public init(app: App) {
    this.appInstance = app.getAppInstance();

    this.initializeMiddlewares();
    this.intializeRoutes();
  }

  private initializeMiddlewares() {
    this.appInstance.use(bodyParser.urlencoded({extended: true}));
    this.appInstance.use(bodyParser.json());
  }

  private intializeRoutes() {
    this.appInstance.route('/')
      .get((request: express.Request, response: express.Response) => {
        response.send('Welcome to the node + typescript example');
      });

    this.appInstance.route('/examples')
      .get(this.exampleController.getAll.bind(this.exampleController))
      .post(this.exampleController.create.bind(this.exampleController));

    this.appInstance.route('/users')
      .post(this.userController.register.bind(this.userController));

  }
}
