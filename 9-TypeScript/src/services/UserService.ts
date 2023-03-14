import UserModel from '../models/UserModel';
import connection from '../models/connection';
import IUser from '../interfaces/userInterface';


export default class UserService {
  private model: UserModel
  constructor() {
    this.model = new UserModel(connection)
  }
  public async getAll(): Promise<IUser[]> {
    const result = await this.model.getAll()
    return result
  }
}

// const createUser = async (user: IUser) => {
//   const createdUser = await UserModel.createUser(user)
//   return createdUser
// }