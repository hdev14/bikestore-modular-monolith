import Bicycle from "../domain/Bicycle";

export default interface IBicycleRepository {
  create(bicycle: Bicycle): Promise<void>;
}