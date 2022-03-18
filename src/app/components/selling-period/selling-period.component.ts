import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-selling-period',
  templateUrl: './selling-period.component.html',
  styleUrls: ['./selling-period.component.css']
})
export class SellingPeriodComponent implements OnInit {

  @Input() sellingPeriodId: string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
