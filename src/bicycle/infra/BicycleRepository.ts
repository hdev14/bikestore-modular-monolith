import { injectable } from "inversify";
import 'reflect-metadata';
import IBicycleRepository from "../app/IBicycleRepository";
import Bicycle from "../domain/Bicycle";

@injectable()
export default class BicycleRepository implements IBicycleRepository {
  create(bicycle: Bicycle): Promise<void> {
    return Promise.resolve();
  }
}