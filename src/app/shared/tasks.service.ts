import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

export interface Task {
  id?: string;
  title: string;
  date?: string;
}

interface CreateResponse {
  name: string;
}

@Injectable({providedIn: 'root'})
export class TasksService {
  static url = 'https://angular-calendar-organiz-7a731-default-rtdb.firebaseio.com/tasks';

  constructor(private http: HttpClient) {
  }

  create(task: Task): Observable<Task> {
    return this.http
      .post<CreateResponse>(`${TasksService.url}/${task.date}.json`, task)
      .pipe(map(res => {
        console.log('Response: ', res);
        return {...task, id: res.name};
      }));
  }
}