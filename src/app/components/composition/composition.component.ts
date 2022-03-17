import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-composition',
  templateUrl: './composition.component.html',
  styleUrls: ['./composition.component.css']
})
export class CompositionComponent implements OnInit {

  @Input() compositionRows: CompositionComponent[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
