import {Component, Input, OnInit} from '@angular/core';
import {SubPeriod} from "../../CompositionData";

@Component({
  selector: 'pp-carousel-box',
  templateUrl: './pp-carousel-box.component.html',
  styleUrls: ['./pp-carousel-box.component.css']
})
export class PPCarouselBoxComponent implements OnInit {

  @Input() subPeriods: SubPeriod[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  trackById(index: any, item: any) {
    console.log('trackById', index, item);
    return item.id;
  }

}
