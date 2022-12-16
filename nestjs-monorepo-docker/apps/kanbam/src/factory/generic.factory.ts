import { Injectable } from '@nestjs/common';

@Injectable()
export abstract class GenericFactory<T> {
  abstract create(value: string): T;
}
