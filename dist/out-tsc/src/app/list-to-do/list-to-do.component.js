import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { TasksService } from '../app-services/tasks.service';
import { ToastrService } from "ngx-toastr";
var ListToDoComponent = /** @class */ (function () {
    function ListToDoComponent(taskService, notificationService) {
        this.taskService = taskService;
        this.notificationService = notificationService;
    }
    ListToDoComponent.prototype.ngOnInit = function () {
        this.getTasks();
    };
    ListToDoComponent.prototype.setAsComplete = function (_task, id) {
        _task.Completed = true;
        this.taskService.updateTask(_task, id).subscribe(function (data) {
        });
        this.notificationService.info("The task was marked as completed.", "You completed the task!");
    };
    ListToDoComponent.prototype.deleteTask = function (id) {
        var _this = this;
        console.log(id);
        this.taskService.deleteTask(id).subscribe(function (data) {
            _this.getTasks();
        });
        this.notificationService.error("The task was succesfully deleted.", "Task deleted!");
    };
    ListToDoComponent.prototype.getTasks = function () {
        var _this = this;
        this.taskService.getTasks().
            subscribe(function (tasks) { return _this.tasks = tasks; });
    };
    ListToDoComponent = tslib_1.__decorate([
        Component({
            selector: 'app-list-to-do',
            templateUrl: './list-to-do.component.html',
            styleUrls: ['./list-to-do.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [TasksService,
            ToastrService])
    ], ListToDoComponent);
    return ListToDoComponent;
}());
export { ListToDoComponent };
//# sourceMappingURL=list-to-do.component.js.map