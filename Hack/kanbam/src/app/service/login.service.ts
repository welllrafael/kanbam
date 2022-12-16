import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url: string = "http://localhost:3002/api/user/signin";
  constructor(private httpClient: HttpClient) { }

  signin(email: string, password: string){
    return this.httpClient.post<any>(`${this.url}`,{email: email, password: password}).pipe(
      map((response:any)=>{
        return response
      })
      );
  }
}
