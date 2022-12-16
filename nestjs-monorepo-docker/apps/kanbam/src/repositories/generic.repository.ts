import { UserSchema } from './../entities/user.entity';
import { HttpException, Injectable } from "@nestjs/common";
import * as Realm from "realm";
import { TaskSchema } from "src/entities/task.entity";

/* istanbul ignore next */
@Injectable()
export class GenericRepository {

    private realm: Realm;
    private app = new Realm.App({ id: "kanban-teupx" });
    constructor(){}

    async getConnectionRealm(): Promise<boolean> {
		
        const credentials = Realm.Credentials.anonymous();
        try {                    
            
            //Caso o usuario esteja conectado, ele encerra a conexao
            //this.app.currentUser?.logOut();
            if (!this.app.currentUser) {
                await this.app.logIn(credentials);   
            }            
            
            return await Boolean(this.app.currentUser);
            
        } catch (error) {
            throw new HttpException(error.message, error.code);
        }
    }

    async closeConnectionRealm(): Promise<void> {

		//const app = new Realm.App({ id: "peccode-coletor-backend-gijfu" });

        //Caso o usuario esteja conectado, ele encerra a conexao
        //app.currentUser?.logOut();

        //Desconecto o Realm.
        //this.realm.close();

    }

    async openConnectionRealm(): Promise<Realm> {

        if(await this.getConnectionRealm()){
            this.realm = await Realm.open({
                schema: this.getSchemas()
            });
        }

        return this.realm;            
    }

    private getSchemas() : Array<Realm.ObjectSchema>{
        return[TaskSchema, UserSchema];
    }
}