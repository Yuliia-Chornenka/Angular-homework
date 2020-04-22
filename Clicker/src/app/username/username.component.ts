import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css']
})
export class UsernameComponent implements OnInit {
  username = '';

  constructor() {
  }

  ngOnInit(): void {
    this.localStorageGetName();
  }

  getUserName(name): void {
    this.username = name;
  }

  localStorageGetName(): void {
    if (window.localStorage.userName) {
      this.username = localStorage.getItem('userName');
    }
  }
}
