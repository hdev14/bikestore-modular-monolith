export default class Address {
  constructor(
    public id: string,
    public street: string,
    public neighborhood: string,
    public state: string,
    public addressNumber: string,
    public complement?: string,
  ) { }
}