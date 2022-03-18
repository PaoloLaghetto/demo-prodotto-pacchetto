import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'pp-subperiod-section',
  templateUrl: './pp-subperiod-section.component.html',
  styleUrls: ['./pp-subperiod-section.component.css']
})
export class PPSubperiodSectionComponent implements OnInit {

  @Input() subPeriodId: string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
