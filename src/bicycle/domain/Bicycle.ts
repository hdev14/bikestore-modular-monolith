export enum BicycleTypes {
  MOUNTAIN_BIKE,
  CASUAL,
  SPEED
}

export default class Bicycle {
  constructor(
    public id: string,
    public title: string,
    public type: BicycleTypes,
    public price: number,
  ) { }
}