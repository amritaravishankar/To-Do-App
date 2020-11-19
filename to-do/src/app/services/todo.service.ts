import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import {Todo} from '../models/Todo';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todosUrl: string = 'https://jsonplaceholder.typicode.com/todos';
  todosLimit = '?_limit=20';

  constructor(private _http: HttpClient) { }

  getTodos():Observable<Todo[]>
  {
    return this._http.get<Todo[]>(`${this.todosUrl}${this.todosLimit}`); 
  }

  toggleCompleted(todo: Todo):Observable<any>
  {
    const url = `${this.todosUrl}/${todo.id}`;
    return this._http.put(url, todo, httpOptions);
  }
}