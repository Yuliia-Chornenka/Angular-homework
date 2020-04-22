import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-btn-save-delete-account',
  templateUrl: './btn-save-delete-account.component.html',
  styleUrls: ['./btn-save-delete-account.component.css']
})
export class BtnSaveDeleteAccountComponent implements OnInit {

  @Input() username: string;

  userExist = false;

  constructor() { }

  ngOnInit(): void {
    this.localStorageGetName();
  }

  localStorageGetName(): void {
    if (localStorage.userName) {
      this.userExist = true;
    }
  }

  setLocalStorage(): void {
    localStorage.setItem('userName', this.username);
    this.userExist = true;
  }

  deleteLocalStorage(): void {
    localStorage.removeItem('userName');
    localStorage.removeItem('userResults');
    this.userExist = false;
    window.location.href = '/';
  }
}
