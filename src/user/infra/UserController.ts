import { Request } from "express";
import { inject } from "inversify";
import { BaseHttpController, controller, httpPost } from "inversify-express-utils";
import 'reflect-metadata';
import IUserService from "../app/IUserService";

@controller('/users')
export default class UserController extends BaseHttpController {
  constructor(@inject('IUserService') private userService: IUserService) {
    super();
  }

  @httpPost('')
  async createUser(request: Request) {
    const { name, email, document } = request.body;

    const user = await this.userService.createUser({
      name, email, document
    });

    return this.ok(user);
  }
}