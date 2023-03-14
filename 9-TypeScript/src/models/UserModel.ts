import {Pool} from 'mysql2/promise';
import IUser from '../interfaces/userInterface';
import { RowDataPacket } from 'mysql2'

class UserModel {
  constructor(readonly connection: Pool) {
    this.connection = connection
  }
  public async getAll(): Promise<IUser[]> {
    const query = 'SELECT * from TypeScriptExpress.Users'
    const [result] = await this.connection.execute<IUser[] & RowDataPacket[]>(query)
    return result
    // const [result] = await this.connection.execute(query)
    // return result as IUser[]
  }
  // createUser = async (user: IUser) => {
  //   const [result] = await connection.execute('', []);
  //   return result;
  // }

}

export default UserModel