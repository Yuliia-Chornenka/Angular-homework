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
    // just look at the console. this method must be moved to ngOnInit. Avoid usage ngDoCheck
    console.log('ButtonClickComponent ngDoCheck');
    this.localStorageGetName();
  }

  onTimer(timer: number): void {
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

  tryAgain(): void {// restartGame() ?
    this.timerGo = 10;
    this.seconds = 10;
    this.count = 0;
  }

  localStorageGetName(): void {// isUserExist()
    if (localStorage.userName) {
      this.userExist = true;
    }
  }

  setResultsLocalStorage(): void {// the same, can be moved to service
    const resultExist = localStorage.getItem('userResults');
    if (resultExist) {
      const savedResults: Result[] = JSON.parse(localStorage.getItem('userResults'));
      const newResults = this.results;

      newResults.forEach((item: Result) => {
        savedResults.forEach((elementRes: Result) => {
          if (item.id !== elementRes.id) { // is id unique? can we use find instead nested forEach?
            savedResults.push(item);
          }
        });
      });

      const tmpArray = []; // rename to more logical name, uniqueIds?
      const resultsToSave = savedResults.filter((item: Result) => { // looks like we can use .find instead .filter
        if (tmpArray.indexOf(item.id) === -1) {
          tmpArray.push(item.id); // avoid side effects in .filter.
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
