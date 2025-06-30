import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoStore {
  private _todos = new BehaviorSubject<string[]>([]); // initial empty list

  public todos$: Observable<string[]> = this._todos.asObservable();
  
  addTodo(newTodo: string) {
    const updated = [...this._todos.value, newTodo];
    this._todos.next(updated);
  }

  removeTodo(index: number) {
    const updated = [...this._todos.value];
    updated.splice(index, 1);
    this._todos.next(updated);
  }

  constructor() { }
}
