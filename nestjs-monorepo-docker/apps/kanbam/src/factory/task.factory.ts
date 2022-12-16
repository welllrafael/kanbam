import { Injectable } from '@nestjs/common';
import { IRepository } from '../interface/IRepository.interface';
import { TaskRepository } from '../repositories/task.repository';
import { GenericFactory } from './generic.factory';

@Injectable()
export class TaskFactory extends GenericFactory<IRepository> {
  create(): IRepository {
    return new TaskRepository();
  }
}
