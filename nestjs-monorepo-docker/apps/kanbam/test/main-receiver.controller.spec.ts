import { Test, TestingModule } from '@nestjs/testing';
import { TaskController } from '../src/main-receiver.controller';
import { TaskService } from '../src/main-receiver.service';

describe('TaskController', () => {
  let TaskController: TaskController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [TaskController],
      providers: [TaskService],
    }).compile();

    TaskController = app.get<TaskController>(TaskController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(TaskController.getHello()).toBe('Hello World!');
    });
  });
});
