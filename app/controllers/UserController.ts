import * as express from 'express';
import {inject, injectable} from 'inversify';
import {HttpCodes} from '../common/enums/HttpCodes';
import {UserService} from '../services/UserService';

@injectable()
export class UserController {

private userService: UserService;

  constructor(
    @inject(UserService) userService: UserService
  ) {
    this.userService = userService;
  }

  public register(request: express.Request, response: express.Response) {
      let data = request.body;

      this.userService.register(data);

      return response.status(HttpCodes.CREATED).send('User registered');
  };
}
