import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
  <div class="col-6 col-md">
  <h5>About</h5>
  <ul class="list-unstyled text-small">
    <li><a class="text-muted" href="#">Team</a></li>
    <li><a class="text-muted" href="#">Locations</a></li>
    <li><a class="text-muted" href="#">Privacy</a></li>
    <li><a class="text-muted" href="#">Terms</a></li>
  </ul>
</div>
  `,
  styles: []
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
