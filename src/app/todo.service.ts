import { Injectable } from '@angular/core';
import {Todo} from './Model/todo.model';
@Injectable({
  providedIn: 'root'
})
export class TodoService {
  mesTodos: Todo [] = [];
  constructor() {
    this.mesTodos = [
      new Todo('lundi', 'commencer à taraviller'),
      new Todo('Mercredi', 'Football')
    ];
  }
  getTodos() {
    return this.mesTodos;
  }
  addTodo(todo: Todo) {
    this.mesTodos.push(todo);
  }
  deleteTodo(todo: Todo) {
    const index = this.mesTodos.indexOf(todo);
    if (index === -1) {
      alert('todo innexistant');
    } else {
      this.mesTodos.splice(index, 1);
    }
  }
  loggerTodo() {
    console.log(this.mesTodos);
  }
}
