import { Injectable } from '@angular/core';
import { StoreService } from './store-service';
import { Todo } from '../model/todo';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpStoreService extends StoreService {

  private url = '/api/todos';

  constructor(private http: HttpClient) {
    super();
  }

  getAll(): Promise<Todo[]> {
    return this.http.get<Todo[]>(this.url).toPromise();
  }

  create(title: string): Promise<Todo> {
    return this.http.post<Todo>(this.url,
      { title: title, completed: false}
    ).toPromise();
  }

  update(todo: Todo): Promise<Todo> {
    return this.http.put<Todo>(
      this.url + '/' + todo.id, todo
    ).toPromise();
  }

  remove(id: number): Promise<Todo> {
    return new Promise( async (resolve, reject) => {

      // this.http.get<Todo>(
      //   this.url + '/' + id
      // ).subscribe( t => {
      //   this.http.delete(this.url + '/' + id)
      //     .subscribe( msg => {
      //       resolve(t);
      //     });
      // } );

      const todo = await this.http.get<Todo>(
        this.url + '/' + id
      ).toPromise();

      await this.http.delete(this.url + '/' + id).toPromise();

      resolve(todo);
    });
  }

  clearCompleted(): Promise<Todo[]> {
    return new Promise( async (resolve, reject) => {

      const todos = await this.getAll();
      const toDelete: Todo[]
        = todos.filter(t => t.completed === true);
      const promises: Promise<Todo>[]
        = toDelete.map( t => this.remove(t.id));

      Promise.all(promises)
        .then( results => { resolve(results); });
    });
  }
}
