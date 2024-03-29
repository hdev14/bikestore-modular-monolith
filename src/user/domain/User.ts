import Address from "./Address";
import Bank from "./Bank";

export default class User {
  constructor(
    public id: string,
    public name: string,
    public email: string,
    public document: string,
    public bank?: Bank,
    public address?: Address,
  ) { }
}