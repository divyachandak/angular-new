import { Directive, HostBinding, OnInit, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appInputBox]'
})
export class InputBoxDirective {

  constructor() { }
  // @HostBinding('style.width')
  // inwi: string;

  // @Input()
  // dfCl: string;

  // ngOnInit(){
  //   this.inwi = this.dfCl;
  // }
  // widthc() {
  //   this.inwi =  `300px`;
  //   console.log(this.inwi);
  // }
  // widtho() {
  //   this.inwi =  `100px`;
  //   console.log(this.inwi);
  // }
  // @HostListener('mouseenter')
  // msIn() {
  //   this.widthc();
  // }
  // @HostListener('mouseleave')
  // msout() {
  //   this.widtho();
  // }

  @HostBinding('style.width')
  inwi: string;
  @HostBinding('style.height')
  inhi: string;

@Input()
dfwi: string;
dfhi: string;

ngOnInit() {
  this.inwi = this.dfwi;
  this.inhi = this.dfhi;

}



  widthc() {
    this.inwi =  `300px`;
    this.inhi = '200px';
    console.log(this.inwi);
  }
  widtho() {
    this.inwi =  `100px`;
    this.inhi =  `50px`;
    console.log(this.inwi);
  }
  @HostListener('mouseenter')
  msIn() {
    this.widthc();
  }
  @HostListener('mouseleave')
  msout() {
    this.widtho();
  }

}
