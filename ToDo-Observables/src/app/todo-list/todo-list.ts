import { Component } from '@angular/core';
import { TodoStore } from '../service/todo-store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todo-list',
  imports: [],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.css'
})
export class TodoList {
  todos$: Observable<string[]>;
  constructor(private todoStore: TodoStore) {
    this.todos$ = this.todoStore.todos$;
  }
   
  remove(index: number) {
    this.todoStore.removeTodo(index);
  }
}
