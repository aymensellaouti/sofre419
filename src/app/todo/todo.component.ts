import { Component, OnInit } from '@angular/core';
import {TodoService} from '../todo.service';
import {Todo} from '../Model/todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers: [TodoService]
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [];
  title = '';
  content = '';
  constructor(
    private todoService: TodoService
  ) { }

  ngOnInit() {
    this.todos = this.todoService.getTodos();
  }
  addTodo() {
    const todo = new Todo(this.title, this.content);
    this.todoService.addTodo(todo);
    this.title = '';
    this.content = '';
  }
  deleteTodo(todo: Todo) {
    this.todoService.deleteTodo(todo);
  }

}
