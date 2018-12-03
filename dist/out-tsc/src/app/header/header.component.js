import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { TasksService } from '../app-services/tasks.service';
import { Task } from '../app-models/task';
import { ToastrService } from 'ngx-toastr';
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(modalService, taskService, notificationService) {
        this.modalService = modalService;
        this.taskService = taskService;
        this.notificationService = notificationService;
        this.task = new Task;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.open = function (content) {
        var _this = this;
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(function (result) {
            _this.task = new Task();
        });
    };
    HeaderComponent.prototype.saveTask = function (_task) {
        _task.CreationDate = new Date();
        _task.Completed = false;
        console.log(_task);
        this.taskService.addTask(_task).subscribe();
        this.notificationService.success("The task was succesfully added.", "Task added!");
    };
    HeaderComponent.prototype.getTasks = function () {
        var _this = this;
        this.taskService.getTasks().
            subscribe(function (tasks) { return _this.tasks = tasks; });
    };
    //ngBootstrap modal documentation method
    HeaderComponent.prototype.getDismissReason = function (reason) {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        }
        else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    HeaderComponent = tslib_1.__decorate([
        Component({
            selector: 'app-header',
            templateUrl: './header.component.html',
            styleUrls: ['./header.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [NgbModal,
            TasksService,
            ToastrService])
    ], HeaderComponent);
    return HeaderComponent;
}());
export { HeaderComponent };
//# sourceMappingURL=header.component.js.map