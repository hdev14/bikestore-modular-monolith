import { BicycleTypes } from "../domain/Bicycle";

export type CreateBicycleOutput = {
  id: string;
  title: string;
  type: BicycleTypes;
  price: number;
};

export type CreateBicycleInput = {
  title: string;
  type: 'mountain' | 'speed' | 'casual';
  price: number;
};

export default interface IBicycleService {
  createBicycle(input: CreateBicycleInput): Promise<CreateBicycleOutput>
}