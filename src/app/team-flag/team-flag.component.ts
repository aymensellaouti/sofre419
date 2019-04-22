import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-team-flag',
  templateUrl: './team-flag.component.html',
  styleUrls: ['./team-flag.component.css']
})
export class TeamFlagComponent implements OnInit {

  @Input() col1 = 'red';
  @Input() col2 = 'yellow';
  message = 'hello papa';
  @Output() sendDataToDad = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  sendData() {
    this.sendDataToDad.emit(
      {
        message: this.message,
        couleur1: this.col1,
        couleur2: this.col2
      }
    );
  }

}
