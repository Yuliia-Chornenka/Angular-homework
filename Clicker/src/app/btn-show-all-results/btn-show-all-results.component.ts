import { Component, OnInit } from '@angular/core';
import { Result } from '../result';

@Component({
  selector: 'app-btn-show-all-results',
  templateUrl: './btn-show-all-results.component.html',
  styleUrls: ['./btn-show-all-results.component.css']
})
export class BtnShowAllResultsComponent implements OnInit {
  results: Result[];

  savedResultExist = false;

  constructor() { }

  ngOnInit(): void {
  }

  showAllResults(): void {
    this.results = JSON.parse(localStorage.getItem('userResults'));
    this.savedResultExist = !!this.results;
  }
}
