import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';
var TasksService = /** @class */ (function () {
    function TasksService(http) {
        this.http = http;
        this.httpOptions = {
            headers: new HttpHeaders({
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            })
        };
        this.clickOnSave = false;
        this.apiUrl = "http://localhost:55479/api/Tasks";
    }
    TasksService.prototype.getTasks = function () {
        return this.http.get(this.apiUrl)
            .pipe(tap(function (_) { return console.log('Got the list of tasks'); }));
    };
    TasksService.prototype.getTask = function (id) {
        return this.http.get(this.apiUrl + id).pipe(tap(function (_) { return console.log("Got a particular task."); }));
    };
    TasksService.prototype.addTask = function (task) {
        console.log(task);
        return this.http.post(this.apiUrl, JSON.stringify(task), this.httpOptions);
    };
    TasksService.prototype.updateTask = function (task, id) {
        return this.http.put(this.apiUrl + "/" + id, task, this.httpOptions);
    };
    TasksService.prototype.deleteTask = function (id) {
        return this.http.delete(this.apiUrl + "/" + id, this.httpOptions).pipe(tap(function (_) { return console.log("deleted task id=" + id); }));
    };
    TasksService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], TasksService);
    return TasksService;
}());
export { TasksService };
//# sourceMappingURL=tasks.service.js.map