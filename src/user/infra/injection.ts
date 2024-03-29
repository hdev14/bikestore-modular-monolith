import { ContainerModule, interfaces } from "inversify";
import 'reflect-metadata';
import IUserRepository from "../app/IUserRepository";
import IUserService from "../app/IUserService";
import UserSerivce from "../app/UserService";
import UserRepository from "./UserRepository";

import './UserController';

export function createUserModule() {
  const userModule = new ContainerModule((bind: interfaces.Bind) => {
    bind<IUserRepository>('IUserRepository').to(UserRepository);
    bind<IUserService>('IUserService').to(UserSerivce);
  });

  return userModule;
}