import {Component, Input, OnInit} from '@angular/core';
import {SubPeriod} from "../../CompositionData";

@Component({
  selector: 'app-broadcast-week-container',
  templateUrl: './broadcast-week-container.component.html',
  styleUrls: ['./broadcast-week-container.component.css']
})
export class BroadcastWeekContainerComponent implements OnInit {

  @Input() subPeriods: SubPeriod[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
