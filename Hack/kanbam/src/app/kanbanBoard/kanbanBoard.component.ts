import { User } from './../model/user';
import { map } from 'rxjs/operators';
import {Component, Input, OnInit} from '@angular/core';
import { TaskService } from '../service/task.service';
import { Task } from '../model/task';
@Component({
  selector: 'kanban-board',
  templateUrl: './kanbanBoard.component.html',
  styleUrls: ['./kanbanBoard.component.scss']
})
export class KanbanBoard implements OnInit {
  @Input() usrLogged: User = {id:'', email:'',password:'', logged: false};; 
  tasks: Task[];
  stagesNames: string[];
  stagesTasks: any[]; //Only used for rendering purpose
  newTask: Task = {id:'', title:'', description:'', stage:0, idUser: ''};
  enableForm: boolean = false;
  
  constructor(private taskService: TaskService) {

	}

  ngOnInit() {
    // Each task is uniquely identified by its name.
    // Therefore, when you perform any operation on tasks, make sure you pick tasks by names (primary key) instead of any kind of index or any other attribute.
    this.stagesNames = ['To Do', 'In Progress', 'Done', 'Archieved'];
    this.loadTasks();
  }
    
    
  // this function has to be called whenever tasks array is changed to construct stagesTasks for rendering purpose
  configureTasksForRendering = () => {
    this.stagesTasks = [];
    for (let i = 0; i < this.stagesNames.length; ++i) {
      this.stagesTasks.push([]);
    }
    for (let task of this.tasks) {
      const stageId = task.stage;
      this.stagesTasks[stageId].push(task);
    }
  }

  generateTestId = (name) => {
    return name.split(' ').join('-');
  }

  private loadTasks() {
    this.tasks = [];
    let userIdFake = this.usrLogged.id
    this.taskService.getByUserId(userIdFake).subscribe(result => {
      result.map(task => {
        this.tasks.push({
          id: task._id,
          title: task.title,
          description: task.description,
          stage: task.status,
          idUser: userIdFake
        });
      });
      this.configureTasksForRendering();
    });
  }

  forwardMove(task: Task){    
    console.log(task,"current");
    this.tasks.map(currentTask=>{
      if(currentTask.id == task.id && task.stage<3){
        currentTask.stage++
        currentTask.status = currentTask.stage
        this.taskService.moveTask(currentTask).subscribe(result=>{
          if(result.status == currentTask.stage){
            this.configureTasksForRendering();
            console.log(task,"updated");
          }
        })
        this.configureTasksForRendering();
        console.log(task,"updated");
      }
    })
  }
  
  backMove(task: Task){
    this.tasks.map(currentTask=>{
      if(currentTask.id == task.id && task.stage>0){
        currentTask.stage--
        currentTask.status = currentTask.stage
        this.taskService.moveTask(currentTask).subscribe(result=>{
          if(result.status == currentTask.stage){
            this.configureTasksForRendering();
            console.log(task,"updated");
          }
        })
      }
    })
  }

  onSubmit(){
    this.newTask.idUser = this.usrLogged.id;
    this.taskService.createTask(this.newTask).subscribe(result => {
      this.loadTasks(); 
      this.showForm(false);
    })
    
  }

  showForm(show:boolean){
    this.enableForm = show;
  }

}
