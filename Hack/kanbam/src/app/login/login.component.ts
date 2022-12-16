import { User } from './../model/user';
import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: User = {id:'', email:'',password:'', logged: false};
  @Output() userLog = new EventEmitter<User>();

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }


  signin(){
    this.loginService.signin(this.user.email,this.user.password).subscribe(response=>{
      if(response){
        this.user = {
          id: response[0]._id,
          email: response[0].email,
          password: response[0].password,
          logged: true
        }
        this.userLog.emit(this.user);
      }
    })
  }

}
