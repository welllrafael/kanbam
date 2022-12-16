import { UserModule } from './module/user.module';
import { TaskModule } from './module/task.module';
import { Module } from '@nestjs/common';
/* istanbul ignore file */


@Module({
  imports: 
    [
        TaskModule,
        UserModule
    ],
  controllers: [],
  providers: [],
})
export class AppModule {}