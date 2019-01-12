import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-two',
  template: `
  <div class="card mb-4 box-shadow">
  <div class="card-header">
    <h4 class="my-0 font-weight-normal">Pro</h4>
  </div>
  <div class="card-body">
    <h1 class="card-title pricing-card-title">$15 <small class="text-muted">/ mo</small></h1>
    <ul class="list-unstyled mt-3 mb-4">
      <li>20 users included</li>
      <li>10 GB of storage</li>
      <li>Priority email support</li>
      <li>Help center access</li>
    </ul>
    <button type="button" class="btn btn-lg btn-block btn-primary">Get started</button>
  </div>
</div>
  `,
  styles: []
})
export class CardTwoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
