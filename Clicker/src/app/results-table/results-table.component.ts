import {Component, Input, OnInit} from '@angular/core';
import {Result} from '../result';

@Component({
  selector: 'app-results-table',
  templateUrl: './results-table.component.html',
  styleUrls: ['./results-table.component.css']
})
export class ResultsTableComponent implements OnInit {

  @Input() results: Result[];

  constructor() { }

  ngOnInit(): void {
  }

}
