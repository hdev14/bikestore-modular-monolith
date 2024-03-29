import { ContainerModule, interfaces } from "inversify";
import 'reflect-metadata';
import BicycleService from "../app/BicycleService";
import IBicycleRepository from "../app/IBicycleRepository";
import IBicycleService from "../app/IBicycleService";
import BicycleRepository from "./BicycleRepository";

import './BicycleController';

export function createBicycleModule() {
  const bicycleModule = new ContainerModule((bind: interfaces.Bind) => {
    bind<IBicycleRepository>('IBicycleRepository').to(BicycleRepository);
    bind<IBicycleService>('IBicycleService').to(BicycleService);
  });

  return bicycleModule;
}