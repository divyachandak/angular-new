import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-text-color',
  templateUrl: './change-text-color.component.html',
  styleUrls: ['./change-text-color.component.css']
})
export class ChangeTextColorComponent implements OnInit {

  alsts = {
    isprimary: false,
    issuccess: false

  };
  constructor() { }

  ngOnInit() {
  }

}
