import {Component, Input, OnInit} from '@angular/core';
import {SellingPeriod, SubPeriod} from "../../CompositionData";

@Component({
  selector: 'pp-salebility-form',
  templateUrl: './pp-salebility-form.component.html',
  styleUrls: ['./pp-salebility-form.component.css']
})
export class PPSaleabilityFormComponent implements OnInit {

  @Input() sellingPeriod: SellingPeriod;

  public pippo: SellingPeriod = {
    id: '',
    subPeriods: []
  };

  constructor() {
    this.sellingPeriod = {
      id: '',
      subPeriods: []
    }
  }

  ngOnInit(): void {
  }

  ngOnChange() {
    
  }

}
