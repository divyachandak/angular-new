import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-custom-input-output',
  templateUrl: './custom-input-output.component.html',
  styleUrls: ['./custom-input-output.component.css']
})
export class CustomInputOutputComponent implements OnInit {
  @Input()
  ntTxt?: string;
  constructor() { }

  ngOnInit() {
  }

}
