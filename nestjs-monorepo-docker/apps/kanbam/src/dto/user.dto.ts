import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class PostUserDTO {
  @ApiProperty({ required: true })
  @IsNotEmpty()
  public email: string;
  public password: string;
}

export class PutUserDTO {
  @ApiProperty({ required: true })
  @IsNotEmpty()
  public id: string;
}

export class DeleteUserDTO {
  @ApiProperty({ required: true })
  @IsNotEmpty()
  public id: string;
}
