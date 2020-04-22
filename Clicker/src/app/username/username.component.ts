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

  getUserName(name: string): void {
    if (!name.trim()) {
      alert(' name is required');
      return;
    }
    this.username = name.trim();
  }

  localStorageGetName(): void {// 'getName' would be enough, and  would be better move this logic to service
    if (window.localStorage.userName) {
      this.username = localStorage.getItem('userName');
    }
  }
}
