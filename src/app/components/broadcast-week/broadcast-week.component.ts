import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-broadcast-week',
  templateUrl: './broadcast-week.component.html',
  styleUrls: ['./broadcast-week.component.css']
})
export class BroadcastWeekComponent implements OnInit {

  @Input() subPeriodId: string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
