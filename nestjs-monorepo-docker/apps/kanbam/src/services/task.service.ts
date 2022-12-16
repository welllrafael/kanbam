import { Injectable } from '@nestjs/common';
import {
  DeleteTaskDTO,
  PostTaskDTO,
  PutTaskDTO,
} from '../dto/task.dto';
import { TaskFactory } from '../factory/task.factory';

@Injectable()
export class TaskService {
  constructor(
  ) {}

  async getById(id: string): Promise<string> {
    const factory = new TaskFactory();
    const Task = factory.create();
    return await Task.getById(id);
  }

  async getAll(): Promise<string> {
    const factory = new TaskFactory();
    const Task = factory.create();

    return await Task.getAll();
  }

  async update(TaskData: PutTaskDTO): Promise<string> {
    const factory = new TaskFactory();
    const Task = factory.create();

    return await Task.update(TaskData);
  }

  async create(TaskData: PostTaskDTO): Promise<string> {
    const factory = new TaskFactory();
    const Task = factory.create();

    return await Task.create(TaskData);
  }

  async delete(TaskData: DeleteTaskDTO): Promise<string> {
    const factory = new TaskFactory();
    const Task = factory.create();

    return await Task.delete(TaskData);
  }
}
