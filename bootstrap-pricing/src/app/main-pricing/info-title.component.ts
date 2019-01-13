import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-title',
  template: `
  <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center" style="max-width: 700px;">
  <h1 class="display-4">Pricing</h1>
  <p class="lead">
  Quickly build an effective pricing table for your potential customers with this Bootstrap example.
  It's built with default Bootstrap components and utilities with little customization.
  </p>
</div>

  `,
  styles: []
})
export class InfoTitleComponent implements OnInit {
constructor() { }

  ngOnInit() {
  }

}
