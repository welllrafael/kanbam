import { states, TaskSchema } from './../entities/task.entity';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { IRepository } from '../interface/IRepository.interface';
import { GenericRepository } from './generic.repository';
import { Task } from 'src/entities/task.entity';
import { v4 as uuidv4} from 'uuid';
import { ITask } from 'src/interface/ITask.interface';
/* istanbul ignore next */
@Injectable()
export class TaskRepository extends GenericRepository implements IRepository {
  async create(data: ITask): Promise<string> {
    try {
			const realm: Realm = await super.openConnectionRealm();
			const id: string = uuidv4();
      		// const userId: string = uuidv4();

			realm.write(() => {
				realm.create<Task>("Task", {
					_id: id,
					title: data.title,
					description: data.description,
					status: states.ToDo,
					userId: data.idUser
				});
			  });	
			  
			super.closeConnectionRealm();

			return `{ "code": ${HttpStatus.CREATED},  "id": "${id}" }`;
		} catch (error) {
			throw new HttpException(error.message, error.code);
		}	
  }

  async update(data: ITask): Promise<string> {
    try {			
		const realm: Realm = await super.openConnectionRealm();

		const task = realm.objects<Task>("Task");
		const existTask = task.filtered(`_id = '${data.id}'`)[0];

		if(Boolean(existTask)) {
			realm.write(() => {					
				existTask.status = data.status
				existTask.userId = data.idUser
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

  async delete(data: ITask): Promise<string> {
    return `not implemented`;
  }

  async getAll(): Promise<string> {
    try {
		const realm: Realm = await super.openConnectionRealm();
		const country = realm.objects<Task>("Task");			
		const results = JSON.stringify(country.sorted("_id"), null, 2);

		super.closeConnectionRealm();
		
		return results;
	} catch (error) {
		throw new HttpException(error.message, error.code);
	}
  }

  async getById(id: string): Promise<string> {
    try {
			const realm: Realm = await super.openConnectionRealm();
			const breed = realm.objects<Task>("Task");			
			const results = JSON.stringify(breed.filtered(`userId = '${id}'`), null, 2);

			super.closeConnectionRealm();
			
			return results;
		} catch (error) {
			throw new HttpException(error.message, error.code);
		}
  }
}
