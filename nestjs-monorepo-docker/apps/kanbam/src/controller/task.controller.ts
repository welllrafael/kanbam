import {
  DeleteTaskDTO,
  PostTaskDTO,
  PutTaskDTO,
} from '../dto/task.dto';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TaskService } from '../services/task.service';

@Controller("api/task")
export class TaskController {
  constructor(private readonly TaskService: TaskService) {}

  @Get('/id/:id')
  async getById(@Param('id') id: string): Promise<string> {
    console.log(JSON.stringify(`{"newid":${id}}`));
    return await this.TaskService.getById(id);
  }

  @Get('/all')
  async getAll(): Promise<string> {
    return await this.TaskService.getAll();
  }

  @Post()
  async create(
    @Body() postTaskDTO: PostTaskDTO,
  ): Promise<string> {
    return await this.TaskService.create(postTaskDTO);
  }

  @Put()
  async update(
    @Body() putTaskDTO: PutTaskDTO,
  ): Promise<string> {
    return await this.TaskService.update(putTaskDTO);
  }

  @Delete()
  async remove(
    @Body() deleteTaskDTO: DeleteTaskDTO,
  ): Promise<string> {
    return await this.TaskService.delete(deleteTaskDTO);
  }
}
