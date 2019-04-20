import {Container} from "inversify";
import {Router} from "./routes";
import {App} from "./app";
import {ExampleController} from "./controllers/example.controller";
import {UserController} from "./controllers/UserController";
import {UserService} from "./services/UserService";
import {UserRepository} from "./persistance/repositories/UserRepository";

const DIContainer = new Container();

// Common
DIContainer.bind<App>(App).toSelf();
DIContainer.bind<Router>(Router).toSelf();

// Controllers
DIContainer.bind<ExampleController>(ExampleController).toSelf();
DIContainer.bind<UserController>(UserController).toSelf();

// Services
DIContainer.bind<UserService>(UserService).toSelf();

// Repositories
DIContainer.bind<UserRepository>(UserRepository).toSelf();

export default DIContainer;
