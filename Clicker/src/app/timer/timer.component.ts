import { Component, EventEmitter, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {

  @Output() timerGo = new EventEmitter<number>();

  timerValues = [10, 20, 30];

  constructor() { }

  ngOnInit(): void {
  }

  setTimer(seconds): void {
    this.timerGo.emit(seconds);
  }
}
