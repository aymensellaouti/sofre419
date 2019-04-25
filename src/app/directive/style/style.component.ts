import {Component, Input, OnInit} from '@angular/core';
import {TodoService} from '../../todo.service';

@Component({
  selector: 'app-style',
  templateUrl: './style.component.html',
  styleUrls: ['./style.component.css']
})
export class StyleComponent implements OnInit {

  @Input() color = 'blue';
  taille = 20;
  police = 'garamond';
  constructor(private todoService: TodoService) { }
  ngOnInit() {
  }
  changeSize(taille) {
    this.todoService.loggerTodo();
    this.taille = taille ;
  }

}
