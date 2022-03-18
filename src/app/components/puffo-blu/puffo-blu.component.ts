import {Component, Input, OnInit} from '@angular/core';
import {SellingPeriod, SubPeriod} from "../../CompositionData";

@Component({
  selector: 'app-puffo-blu',
  templateUrl: './puffo-blu.component.html',
  styleUrls: ['./puffo-blu.component.css']
})
export class PuffoBluComponent implements OnInit {

  @Input() sellingPeriod: SellingPeriod;

  constructor() {
    this.sellingPeriod = {
      id: '',
      subPeriods: []
    }
  }

  ngOnInit(): void {
  }

}
