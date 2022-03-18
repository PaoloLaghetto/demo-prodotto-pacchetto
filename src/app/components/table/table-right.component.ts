import {Component, ContentChild, ViewChild, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Customer, Representative } from "./customer";
import { CustomerService } from "./customerservice";
import { MessageService } from "primeng/api";
import { Table } from 'primeng/table';

@Component({
  selector: 'app-table-right',
  templateUrl: './table-right.component.html',
  styleUrls: ['./table-right.component.css']
})
export class TableRightComponent implements OnInit {

  @Input() value1: number = 0;
  @Input() value2: number = 0;
  @Input() value3: number = 0;
  @Input() value4: number = 0;
  @Input() value5: number = 0;
  @Input() value6: number = 0;
  @Input() value7: number = 0;
  @Input() value8: number = 0;
  @Input() value9: number = 0;
  @Input() value10: number = 0;
  @Input() value11: number = 0;
  @Input() value12: number = 0;
  @Input() value13: number = 0;
  @Input() value14: number = 0;
  @Input() value15: number = 0;
  @Input() value16: number = 0;

  @Output() value1Change = new EventEmitter<number>();
  @Output() value2Change = new EventEmitter<number>();
  @Output() value3Change = new EventEmitter<number>();
  @Output() value4Change = new EventEmitter<number>();
  @Output() value5Change = new EventEmitter<number>();
  @Output() value6Change = new EventEmitter<number>();
  @Output() value7Change = new EventEmitter<number>();
  @Output() value8Change = new EventEmitter<number>();
  @Output() value9Change = new EventEmitter<number>();
  @Output() value10Change  = new EventEmitter<number>();
  @Output() value11Change  = new EventEmitter<number>();
  @Output() value12Change  = new EventEmitter<number>();
  @Output() value13Change  = new EventEmitter<number>();
  @Output() value14Change  = new EventEmitter<number>();
  @Output() value15Change  = new EventEmitter<number>();
  @Output() value16Change  = new EventEmitter<number>();

  customers: Customer[] = [];

  representatives: Representative[] = [];

  statuses: any[] = [];

  loading: boolean = true;

  activityValues: number[] = [0, 100];
  
  //@ContentChild(Table) dt: Table;
  //@ViewChild(DataTable) dt: DataTable;
  //@ViewChild('dt') dt: Table;
  // tsconfig.json  // "strictPropertyInitialization": false
  constructor(
    //private dt: Table,
    private customerService: CustomerService
  ) { }

  eventTarget($event: any) {
    return $event.target as HTMLInputElement;
  }

  applyFilterGlobal($event: any, stringVal: any) {
    //console.log('test', $event.target.value);
    //this.dt.filterGlobal($event.target.value, stringVal); // $event.target as HTMLInputElement
    //this.dt.reset();
  }

  ngOnInit() {
      this.customerService.getCustomersLarge().then(customers => {
          this.customers = customers;
          this.loading = false;

          this.customers.forEach(customer => customer.date = ((customer && customer.date)?new Date(customer.date):undefined));
      });

      this.representatives = [
          {name: "Amy Elsner", image: 'amyelsner.png'},
          {name: "Anna Fali", image: 'annafali.png'},
          {name: "Asiya Javayant", image: 'asiyajavayant.png'},
          {name: "Bernardo Dominic", image: 'bernardodominic.png'},
          {name: "Elwin Sharvill", image: 'elwinsharvill.png'},
          {name: "Ioni Bowcher", image: 'ionibowcher.png'},
          {name: "Ivan Magalhaes",image: 'ivanmagalhaes.png'},
          {name: "Onyama Limba", image: 'onyamalimba.png'},
          {name: "Stephen Shaw", image: 'stephenshaw.png'},
          {name: "Xuxue Feng", image: 'xuxuefeng.png'}
      ];

      this.statuses = [
          {label: 'Unqualified', value: 'unqualified'},
          {label: 'Qualified', value: 'qualified'},
          {label: 'New', value: 'new'},
          {label: 'Negotiation', value: 'negotiation'},
          {label: 'Renewal', value: 'renewal'},
          {label: 'Proposal', value: 'proposal'}
      ]
    }
  
    ngAfterContentInit() {
      //
  }

}
