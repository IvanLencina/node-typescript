"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = __importStar(require("express"));
class ExampleController {
    constructor() {
        this.path = '/examples';
        this.router = express.Router();
        this.examples = [
            { name: 'This is one example.' },
            { name: 'This is another one.' },
            { name: 'And one more example.' }
        ];
        this.intializeRoutes();
    }
    intializeRoutes() {
        this.router.get('/', (request, response) => {
            response.send('Welcome to the node + typescript example');
        });
        this.router.get(this.path, this.getAll.bind(this));
        this.router.post(this.path, this.create.bind(this));
    }
    getAll(request, response) {
        response.send(this.examples);
    }
    ;
    create(request, response) {
        const example = request.body;
        this.examples.push(example);
        response.send(example);
    }
    ;
}
exports.ExampleController = ExampleController;
