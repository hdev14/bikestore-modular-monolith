import { Request } from "express";
import { inject } from "inversify";
import { BaseHttpController, controller, httpPost } from "inversify-express-utils";
import 'reflect-metadata';
import IBicycleService from "../app/IBicycleService";

@controller('/bicycles')
export default class BicycleController extends BaseHttpController {
  constructor(@inject('IBicycleService') private bicycleService: IBicycleService) {
    super();
  }

  @httpPost('')
  async createBicycle(request: Request) {
    const { title, type, price } = request.body;

    const bicycle = await this.bicycleService.createBicycle({
      title,
      price,
      type,
    });

    return this.ok(bicycle);
  }
}