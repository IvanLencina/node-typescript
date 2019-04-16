import * as express from 'express';
import {inject, injectable} from 'inversify';
import {HttpCodes} from '../common/enums/HttpCodes';
import {UserService} from '../services/UserService';
import {IUser} from "../interfaces/IUser";

@injectable()
export class UserController {

private userService: UserService;

  constructor(
    @inject(UserService) userService: UserService
  ) {
    this.userService = userService;
  }

  public getAll(request: express.Request, response: express.Response) {
    this.userService.findAll().then(users => {
      const userTransformer: IUser[] = [];

      for (let user of users) {
        userTransformer.push({
          id: user.getId(),
          email: user.getEmail(),
        });
      }

      return response
        .status(HttpCodes.OK)
        .json(userTransformer)
        .send();
    });
  }

  public getOne(request: express.Request, response: express.Response) {
    let id = request.params.id;

    this.userService.findOneOrFail(id).then(user => {
      return response
        .status(HttpCodes.OK)
        .send({
          'id': user.getId(),
          'email': user.getEmail(),
        });
    });
  }

  public register(request: express.Request, response: express.Response) {
    let data = request.body;

    // Todo: https://github.com/IvanLencina/node-typescript/issues/6

    this.userService.register(data);

    return response
      .status(HttpCodes.CREATED)
      .send('User registered');
  };

  public update(request: express.Request, response: express.Response) {
    let id = request.params.id;
    let data = request.body;

    this.userService.update(id, data);

    return response
      .status(HttpCodes.OK)
      .send('User updated');
  };

  public remove(request: express.Request, response: express.Response) {
    let id = request.params;

    this.userService.delete(id);

    return response
      .status(HttpCodes.OK)
      .send('User deleted');
  };
}
