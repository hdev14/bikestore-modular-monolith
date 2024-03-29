
export type CreateUserInput = {
  name: string;
  email: string;
  document: string;
};

export type CreateUserOutput = {
  id: string;
  email: string;
  document: string;
}

export default interface IUserService {
  createUser(input: CreateUserInput): Promise<CreateUserOutput>;
}