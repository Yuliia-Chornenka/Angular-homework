import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-usergreeting',
  templateUrl: './usergreeting.component.html',
  styleUrls: ['./usergreeting.component.css']
})
export class UsergreetingComponent implements OnInit {

  @Input() username: string;

  constructor() { }

  ngOnInit(): void {
  }

}
