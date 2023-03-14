import { Request, Response } from 'express';
import UserService from '../services/UserService';

export default class UserController {
  private service: UserService
  constructor() {
    this.service = new UserService
  }
  public  getAll = async (_req: Request, res: Response) => {
    const users = await this.service.getAll()
    return res.status(200).json(users)
  }
}