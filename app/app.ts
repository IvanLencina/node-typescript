import express from 'express';

export class App {
  public app: express.Application;
  public port: number;

  constructor(port: number) {
    this.app = express();
    this.port = port;
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`Basic node + ts app listening on port ${this.port}`);
    });
  }

  public getAppInstance() {
    return this.app;
  }
}