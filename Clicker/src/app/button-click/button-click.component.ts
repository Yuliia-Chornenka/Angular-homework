import {Component, Input, OnInit, DoCheck} from '@angular/core';

import { Result } from '../result';

@Component({
  selector: 'app-button-click',
  templateUrl: './button-click.component.html',
  styleUrls: ['./button-click.component.css']
})
export class ButtonClickComponent implements OnInit, DoCheck {
  count = 0;
  timerGo = 10;
  seconds = 10;
  userExist = false;
  results: Result[] = [];

  @Input() username: string;

  constructor() { }

  ngOnInit(): void {
  }


  ngDoCheck(): void {
    this.localStorageGetName();
  }

  onTimer(timer): void {
  this.timerGo = timer;
  this.seconds = timer;
  }

  increase(): void {
    this.count++;

    if (this.count === 1) {
      const timerStart = setInterval(() => {
        this.timerGo--;

        if (this.timerGo === 0) {
          clearInterval(timerStart);

          const result = {
            timer: this.seconds,
            count: this.count,
            ratio: this.count / this.seconds,
            rate: (this.count / this.seconds) < 2 ? 'Bad job :(' : 'Good job :)',
            id: Date.now()
          };

          this.results.push(result);
        }
      }, 1000);
    }
  }

  tryAgain(): void {
    this.timerGo = 10;
    this.seconds = 10;
    this.count = 0;
  }

  localStorageGetName(): void {
    if (localStorage.userName) {
      this.userExist = true;
    }
  }

  setResultsLocalStorage(): void {
    const resultExist = localStorage.getItem('userResults');
    if (resultExist) {
      const savedResults: Result[] = JSON.parse(localStorage.getItem('userResults'));
      const newResults = this.results;

      newResults.forEach((item) => {
      savedResults.forEach((elementRes) => {
          if (item.id !== elementRes.id) {
            savedResults.push(item);
          }
        });
      });

      const tmpArray = [];
      const resultsToSave = savedResults.filter((item) => {
        if (tmpArray.indexOf(item.id) === -1) {
          tmpArray.push(item.id);
          return true;
        }
        return false;
      });

      localStorage.setItem('userResults', JSON.stringify(resultsToSave));
    } else {
      localStorage.setItem('userResults', JSON.stringify(this.results));
    }
  }
}
