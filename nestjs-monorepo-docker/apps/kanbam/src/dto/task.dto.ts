import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class PostTaskDTO {
  @ApiProperty({ required: true })
  @IsNotEmpty()
  public id: string;
}

export class PutTaskDTO {
  @ApiProperty({ required: true })
  @IsNotEmpty()
  public id: string;
}

export class DeleteTaskDTO {
  @ApiProperty({ required: true })
  @IsNotEmpty()
  public id: string;
}
