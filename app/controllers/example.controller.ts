import * as express from 'express';
import {IExample} from "../interfaces/example.interface";

export class ExampleController {
  public path = '/examples';
  public router = express.Router();

  private examples: IExample[] = [
    { name: 'This is one example.' },
    { name: 'This is another one.' },
    { name: 'And one more example.'}
  ];

  constructor() {
    this.intializeRoutes();
  }

  public intializeRoutes() {
    this.router.get('/', (request: express.Request, response: express.Response) => {
      response.send('Welcome to the node + typescript example');
    });

    this.router.get(this.path, this.getAll.bind(this));
    this.router.post(this.path, this.create.bind(this));
  }

  public getAll(request: express.Request, response: express.Response) {
    response.send(this.examples);
  };

  public create(request: express.Request, response: express.Response) {
    const example: IExample = request.body;

    this.examples.push(example);

    response.send(example);
  };
}