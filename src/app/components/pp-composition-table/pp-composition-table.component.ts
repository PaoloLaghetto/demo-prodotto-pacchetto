import {Component, Input, OnInit, OnChanges} from '@angular/core';
import {SubPeriod, PPCompositionTabelComponent as PPCompositionTabelComponentData} from "../../CompositionData";

@Component({
  selector: 'pp-composition-table',
  templateUrl: './pp-composition-table.component.html',
  styleUrls: ['./pp-composition-table.component.css']
})
export class PPCompositionTabelComponent implements OnInit, OnChanges {

  public test: PPCompositionTabelComponentData[] = [];
  @Input() subPeriod: SubPeriod = { id: '', components: [] };
  @Input() compositionRows: PPCompositionTabelComponentData[] = [];

  constructor() {
    //
  }

  ngOnInit(): void {
    //this.test = this.compositionRows;
    //this.test = this.subPeriod.components;
  }

  ngOnChanges(simpleChanges: any) {
    //const {compositionRows} = simpleChanges;
    //this.test = compositionRows;
    //this.test = this.subPeriod.components;
    console.log('ngOnChanges', simpleChanges);
  }

  trackById = (index: any, item: any) => {
    console.log('trackById - composition', index, item);
    return item.id;
  }

  trackByFunction = (index: any, item: any) => {
    console.log('trackByFunction', index, item);
    return item.id;
  }

}
