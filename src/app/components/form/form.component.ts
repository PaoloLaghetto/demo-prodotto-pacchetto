import {Component, Input, OnInit} from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}
