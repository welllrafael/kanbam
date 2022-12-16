import { User } from './model/user';
import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Kanban board';
  logged: boolean = false;
  usrLogged: User = {id:'', email:'',password:'', logged: false};;

  loggin(user){
    console.log(user,"event")
    this.usrLogged = user
    this.logged = this.usrLogged.logged
    // window.location.reload();
  }
}
