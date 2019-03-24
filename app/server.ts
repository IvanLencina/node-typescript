import {App} from './app';
import {ExampleController} from "./controllers/example.controller";
import {Router} from "./routes";

const app = new App(
  [
    new ExampleController()
  ],
  3000,
);

const router = new Router(app.app);

app.listen();