import { randomUUID } from "crypto";
import { inject, injectable } from "inversify";
import 'reflect-metadata';
import User from "../domain/User";
import IUserRepository from "./IUserRepository";
import IUserService, { CreateUserInput, CreateUserOutput } from "./IUserService";

@injectable()
export default class UserSerivce implements IUserService {
  private readonly userRepository: IUserRepository;

  constructor(@inject('IUserRepository') userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }

  async createUser(input: CreateUserInput): Promise<CreateUserOutput> {
    const user = new User(randomUUID(), input.name, input.email, input.document);

    await this.userRepository.create(user);

    return user;
  }
}