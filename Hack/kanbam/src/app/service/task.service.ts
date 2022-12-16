import { Task } from './../model/task';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  url: string = "http://localhost:3002/api/task";
  constructor(private httpClient: HttpClient) { }

  getByUserId(id: string): Observable<any> {
    return this.httpClient.get<any>(`${this.url}/id/${id}`).pipe(
      map((response:any)=>{
        return response
      })
  );
  }
  
  moveTask(task: Task){
    return this.httpClient.put<any>(`${this.url}`,task).pipe(
      map((response:any)=>{
        return response
      })
      );
  }

  createTask(task: Task){
    return this.httpClient.post<any>(`${this.url}`,task).pipe(
      map((response:any)=>{
        return response
      })
      );
  }

	
}
