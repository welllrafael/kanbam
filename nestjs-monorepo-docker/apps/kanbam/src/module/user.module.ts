import { Module, Logger } from '@nestjs/common';
import { UserController } from '../controller/user.controller';
import { UserService } from '../services/user.service';


@Module({
  imports: [],
  controllers: [UserController],
  providers: [
    UserService,
    Logger
  ],
})
export class UserModule {}
