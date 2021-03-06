import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-three',
  template: `
  <div class="card mb-4 box-shadow">
  <div class="card-header">
    <h4 class="my-0 font-weight-normal">Enterprise</h4>
  </div>
  <div class="card-body">
    <h1 class="card-title pricing-card-title">$29 <small class="text-muted">/ mo</small></h1>
    <ul class="list-unstyled mt-3 mb-4">
      <li>30 users included</li>
      <li>15 GB of storage</li>
      <li>Phone and email support</li>
      <li>Help center access</li>
    </ul>
    <button type="button" class="btn btn-lg btn-block btn-primary">Contact us</button>
  </div>
</div>
  `,
  styles: []
})
export class CardThreeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
