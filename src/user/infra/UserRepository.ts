import 'reflect-metadata';
import { injectable } from "inversify";
import IUserRepository from "../app/IUserRepository";
import User from "../domain/User";

@injectable()
export default class UserRepository implements IUserRepository {
  create(user: User): Promise<void> {
    return Promise.resolve();
  }
}