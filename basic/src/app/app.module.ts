import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DirectiveComponent } from './directive/directive.component';
import { MagicDirective } from './directive/magic.directive';
import { InputBoxDirective } from './directive/input-box.directive';

@NgModule({
  declarations: [
    AppComponent,
    DirectiveComponent,
    MagicDirective,
    InputBoxDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
