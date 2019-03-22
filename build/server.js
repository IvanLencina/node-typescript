"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const example_controller_1 = require("./controllers/example.controller");
const app = new app_1.App([
    new example_controller_1.ExampleController()
], 3000);
app.listen();
