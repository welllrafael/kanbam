import { BSON, ObjectSchema } from "realm";

export enum states {
	ToDo,
	InProgress,
	Done,
	Achived
}

export type Task = {
	_id: string;	
	title: string;
    description: string;
	status: states;
	userId: string
};

export const TaskSchema: ObjectSchema = {
	name: 'Task',
	properties: {
		_id: 'string',		
		title: 'string',
        description: 'string',
		status: 'int',
		userId: 'string'
	},
	primaryKey: '_id'
};