import {App} from './app';
import {ExampleController} from "./controllers/example.controller";
import {Router} from "./routes";

const app = new App(3000);

new Router(app.getAppInstance(), new ExampleController());

app.listen();