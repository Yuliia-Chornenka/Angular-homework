import {Component, EventEmitter, Input, Output, OnInit} from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  @Input() username: string;
  @Output() timerGo = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  setTimer(seconds): void {
    this.timerGo.emit(seconds);
  }
}
