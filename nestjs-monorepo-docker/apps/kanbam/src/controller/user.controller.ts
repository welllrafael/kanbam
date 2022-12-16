import { UserService } from '../services/user.service';

import {
  DeleteUserDTO,
  PostUserDTO,
  PutUserDTO,
} from '../dto/user.dto';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@Controller("api/user")
export class UserController {
  constructor(private readonly UserService: UserService) {}

  @Get('/id/:id')
  async getById(@Param('id') id: string): Promise<string> {
    console.log(JSON.stringify(`{"newid":${id}}`));
    return await this.UserService.getById(id);
  }

  @Get('/all')
  async getAll(): Promise<string> {
    return await this.UserService.getAll();
  }

  @Post()
  async create(
    @Body() postUserDTO: PostUserDTO,
  ): Promise<string> {
    return await this.UserService.create(postUserDTO);
  }

  @Post('/signin')
  async signin(
    @Body() postUserDTO: PostUserDTO,
  ): Promise<string> {
    return await this.UserService.signin(postUserDTO.email, postUserDTO.password);
  }

  @Put()
  async update(
    @Body() putUserDTO: PutUserDTO,
  ): Promise<string> {
    return await this.UserService.update(putUserDTO);
  }

  @Delete()
  async remove(
    @Body() deleteUserDTO: DeleteUserDTO,
  ): Promise<string> {
    return await this.UserService.delete(deleteUserDTO);
  }
}
