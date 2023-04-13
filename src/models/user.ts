import { ObjectId } from "mongodb";

export default class User {
  constructor(
    public userName: string,
    public password: string,
    public email: string,
    public id?: ObjectId
  ) {}
}
