import { Component, Input, OnInit } from '@angular/core';

import { Result } from '../result';
import { DataService } from '../data.service';


@Component({
  selector: 'app-results-table',
  templateUrl: './results-table.component.html',
  styleUrls: ['./results-table.component.scss']
})
export class ResultsTableComponent implements OnInit {

  @Input() results: Result[];

  resultsExist = true;

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.getUserResults();
  }

  getUserResults(): void {
    if (!this.results) {
      this.dataService.getUserResults()
        .subscribe(results => {
          this.results = results;
          this.resultsExist = !!this.results;
        });
    }
  }
}
