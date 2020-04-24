import { Component, OnInit } from '@angular/core';

import { Result } from '../result';
import { DataService } from '../data.service';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.scss']
})
export class UserAccountComponent implements OnInit {
  count = 0;
  timerGo = 10;
  seconds = 10;
  results: Result[] = [];

  username = '';

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.getName();
  }

  getName(): void {
    this.dataService.getName()
      .subscribe(username => this.username = username);
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

  restartGame(): void {
    this.timerGo = 10;
    this.seconds = 10;
    this.count = 0;
  }

  saveUserResults(): void {
    this.dataService.saveUserResults(this.results);
    this.results = [];
  }

  removeUser(): void {
    this.dataService.removeUser();
  }
}
