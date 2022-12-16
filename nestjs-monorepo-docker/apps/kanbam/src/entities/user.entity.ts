import { ObjectSchema } from "realm";


export type User = {
	_id: string;	
	email: string;
    password: string;
	enable: boolean;	
};

export const UserSchema: ObjectSchema = {
	name: 'User',
	properties: {
		_id: 'string',		
		email: 'string',
        password: 'string',
		enable: 'bool'
	},
	primaryKey: '_id'
};