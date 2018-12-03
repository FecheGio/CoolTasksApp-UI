import { Component, OnInit } from '@angular/core';
import { TasksService } from '../app-services/tasks.service';
import { Task } from '../app-models/task';
import { ToastrService } from "ngx-toastr";

@Component({
  selector: 'app-list-to-do',
  templateUrl: './list-to-do.component.html',
  styleUrls: ['./list-to-do.component.css']
})
export class ListToDoComponent implements OnInit {

  tasks: Array<Task>;
  constructor(
    private taskService: TasksService,
    private notificationService: ToastrService
  ) { }

  ngOnInit() {
    this.getTasks();
  }

 setAsComplete(_task: Task, id: number){
  _task.Completed = true; 
  this.taskService.updateTask(_task, id).subscribe((data)=>{
   });
   this.notificationService.info("The task was marked as completed.", "You completed the task!")

  }

  deleteTask(id: number){
    console.log(id)
    this.taskService.deleteTask(id).subscribe((data)=>{
      this.getTasks();
      }
    );
    this.notificationService.error("The task was succesfully deleted.", "Task deleted!")
  }

  getTasks(){
    this.taskService.getTasks().
    subscribe(tasks => this.tasks = tasks
    );
  }
        
}
