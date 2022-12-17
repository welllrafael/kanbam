import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { IRepository } from '../interface/IRepository.interface';
import { GenericRepository } from './generic.repository';
import { User, UserSchema } from '../entities/user.entity';
import { v4 as uuidv4 } from 'uuid';
import { IUser } from '../interface/IUser.interface';

/* istanbul ignore next */
@Injectable()
export class UserRepository extends GenericRepository implements IRepository {
  async create(data: IUser): Promise<string> {
    try {
      const realm: Realm = await super.openConnectionRealm();
      const id: string = uuidv4();
      // const userId: string = uuidv4();

      realm.write(() => {
        realm.create<User>('User', {
          _id: id,
          email: data.email,
          password: data.password,
          enable: true,
        });
      });

      super.closeConnectionRealm();

      return `{ "code": ${HttpStatus.CREATED},  "id": "${id}" }`;
    } catch (error) {
      throw new HttpException(error.message, error.code);
    }
  }

  async update(data: IUser): Promise<string> {
    try {
      const realm: Realm = await super.openConnectionRealm();

      const User = realm.objects<User>('User');
      const existUser = User.filtered(`_id = '${data.id}'`)[0];

      if (Boolean(existUser)) {
        realm.write(() => {
          existUser.enable = data.enable;
          existUser.password = data.password;
        });
      } else {
        super.closeConnectionRealm();
        return `{ "code": ${HttpStatus.NOT_FOUND},  "message": "registro não encontrado." }`;
      }

      super.closeConnectionRealm();

      return JSON.stringify(data);
    } catch (error) {
      throw new HttpException(error.message, error.code);
    }
  }

  async delete(data: IUser): Promise<string> {
    return `not implemented`;
  }

  async getAll(): Promise<string> {
    try {
      const realm: Realm = await super.openConnectionRealm();
      const country = realm.objects<User>('User');
      const results = JSON.stringify(country.sorted('_id'), null, 2);

      super.closeConnectionRealm();

      return results;
    } catch (error) {
      throw new HttpException(error.message, error.code);
    }
  }

  async getById(id: string): Promise<string> {
    try {
      const realm: Realm = await super.openConnectionRealm();
      const breed = realm.objects<User>('User');
      const results = JSON.stringify(breed.filtered(`_id = '${id}'`), null, 2);

      super.closeConnectionRealm();

      return results;
    } catch (error) {
      throw new HttpException(error.message, error.code);
    }
  }

  async signin(email: string, password: string): Promise<string> {
    try {
      const realm: Realm = await super.openConnectionRealm();
      const breed = realm.objects<User>('User');
      const results = JSON.stringify(
        breed.filtered(
          `email = '${email}' && password='${password}' && enable = true`,
        ),
        null,
        2,
      );

      super.closeConnectionRealm();

      if (results == '[]') {
        throw new HttpException('login failed', 401);
      }

      return results;
    } catch (error) {
      throw new HttpException(error.message, error.code);
    }
  }
}
