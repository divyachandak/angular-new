import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logo',
  template: `
  <div class="col-12 col-md">
  <img class="mb-2" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" alt="" width="24" height="24">
  <small class="d-block mb-3 text-muted">&copy; 2017-2018</small>
</div>
  `,
  styles: []
})
export class LogoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
