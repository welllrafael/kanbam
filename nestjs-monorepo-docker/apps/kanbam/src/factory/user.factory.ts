import { Injectable } from '@nestjs/common';
import { IRepository } from '../interface/IRepository.interface';
import { UserRepository } from '../repositories/User.repository';
import { GenericFactory } from './generic.factory';

@Injectable()
export class UserFactory extends GenericFactory<IRepository> {
  create(): IRepository {
    return new UserRepository();
  }
}
