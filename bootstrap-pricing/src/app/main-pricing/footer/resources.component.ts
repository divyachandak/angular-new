import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resources',
  template: `
  <div class="col-6 col-md">
  <h5>Resources</h5>
  <ul class="list-unstyled text-small">
    <li><a class="text-muted" href="#">Resource</a></li>
    <li><a class="text-muted" href="#">Resource name</a></li>
    <li><a class="text-muted" href="#">Another resource</a></li>
    <li><a class="text-muted" href="#">Final resource</a></li>
  </ul>
</div>
  `,
  styles: []
})
export class ResourcesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
