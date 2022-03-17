import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormData} from "./FormData";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

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

  constructor() { }

  ngOnInit(): void {
    console.log();
  }

  handleValue1Change() {
    this.value1Change.emit(this.value1);
  }

  handleValue2Change() {
    this.value2Change.emit(this.value2);
  }
}
