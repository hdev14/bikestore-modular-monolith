export default class Bank {
  constructor(
    public id: string,
    public account: string,
    public accountDigit: string,
    public agency: string,
    public agencyDigit: string,
  ) { }
}