import { Injectable } from '@angular/core';
import { Task } from '../app-models/task';
import { Observable } from '../../../node_modules/rxjs';
import { HttpClient, HttpHeaders, HttpClientModule} from '@angular/common/http';
import { map, catchError, tap } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})


export class TasksService {

  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin':'*',
      'Content-Type':  'application/json'
    })
  };

  clickOnSave = false;

  private apiUrl = "http://localhost:55479/api/Tasks"
  constructor(
    private http: HttpClient) { }

  getTasks (): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl)
      .pipe(
        tap(_ => console.log('Got the list of tasks'))
      );
  }

   getTask(id): Observable<Task> {
     return this.http.get<Task>(this.apiUrl + id).pipe(
       tap(_ => console.log("Got a particular task.")
      )
      );
   }
  
  addTask (task: Task){
    console.log(task);
    return this.http.post(this.apiUrl, JSON.stringify(task), this.httpOptions);
  }
  
  updateTask (task: Task, id: number): Observable<Task> {
    return this.http.put<Task>(this.apiUrl + "/" + id, task, this.httpOptions);
  }
  
  deleteTask (id): Observable<Task> {
    return this.http.delete<Task>(this.apiUrl + "/" + id, this.httpOptions).pipe(
      tap(_ => console.log(`deleted task id=${id}`))
    );
  }
}
