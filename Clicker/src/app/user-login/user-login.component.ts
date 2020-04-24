import { Component, OnInit } from '@angular/core';

import { DataService } from '../data.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {
  username = '';

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.getName();
  }

  getUserName(name: string): void {
    if (!name.trim()) {
      alert('Name is required');
      return;
    }
    this.username = name.trim();
    this.dataService.rememberUser(this.username);
  }

  getName(): void {
    this.dataService.getName()
      .subscribe(username => this.username = username);
  }
}
