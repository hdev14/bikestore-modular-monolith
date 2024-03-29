import { randomUUID } from "crypto";
import { inject, injectable } from "inversify";
import 'reflect-metadata';
import Bicycle, { BicycleTypes } from "../domain/Bicycle";
import IBicycleRepository from "./IBicycleRepository";
import IBicycleService, { CreateBicycleInput, CreateBicycleOutput } from "./IBicycleService";

@injectable()
export default class BicycleService implements IBicycleService {
  private readonly bicycleRepository: IBicycleRepository;

  constructor(@inject('IBicycleRepository') bicycleRepository: IBicycleRepository) {
    this.bicycleRepository = bicycleRepository;
  }

  async createBicycle(input: CreateBicycleInput): Promise<CreateBicycleOutput> {
    const types = {
      mountain: BicycleTypes.MOUNTAIN_BIKE,
      speed: BicycleTypes.SPEED,
      casual: BicycleTypes.CASUAL
    };

    const bicycle = new Bicycle(randomUUID(), input.title, types[input.type], input.price);

    await this.bicycleRepository.create(bicycle);

    return bicycle;
  }
}