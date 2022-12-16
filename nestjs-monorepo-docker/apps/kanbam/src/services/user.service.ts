import { UserRepository } from './../repositories/user.repository';
import { Injectable } from '@nestjs/common';
import {
  DeleteUserDTO,
  PostUserDTO,
  PutUserDTO,
} from '../dto/user.dto';
import { UserFactory } from '../factory/user.factory';

@Injectable()
export class UserService {
  constructor(
  ) {}

  async getById(id: string): Promise<string> {
    const factory = new UserFactory();
    const User = factory.create();
    return await User.getById(id);
  }

  async getAll(): Promise<string> {
    const factory = new UserFactory();
    const User = factory.create();

    return await User.getAll();
  }

  async update(UserData: PutUserDTO): Promise<string> {
    const factory = new UserFactory();
    const User = factory.create();

    return await User.update(UserData);
  }

  async create(UserData: PostUserDTO): Promise<string> {
    const factory = new UserFactory();
    const User = factory.create();

    return await User.create(UserData);
  }

  async delete(UserData: DeleteUserDTO): Promise<string> {
    const factory = new UserFactory();
    const User = factory.create();

    return await User.delete(UserData);
  }

  async signin(email: string, password: string): Promise<string> {
    //POG
    const repo = new UserRepository();
    return await repo.signin(email, password)
  }
}
