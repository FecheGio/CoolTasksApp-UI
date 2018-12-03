import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { TasksService } from '../app-services/tasks.service';
import { Task } from '../app-models/task';
import {ToastrService} from 'ngx-toastr';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  task: Task = new Task;
  tasks: Task[];
  constructor(private modalService: NgbModal, 
              private taskService: TasksService,
              private notificationService: ToastrService) {}

  ngOnInit(){
  }
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.task = new Task();
    });
  }
  
  saveTask(_task: Task){
    _task.CreationDate = new Date();
    _task.Completed = false;
    console.log(_task)

    this.taskService.addTask(_task).subscribe();
    this.notificationService.success("The task was succesfully added.", "Task added!");
  }

  getTasks(){
    this.taskService.getTasks().
    subscribe(tasks => this.tasks = tasks
    );
  }
  
  //ngBootstrap modal documentation method
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
     return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

}
