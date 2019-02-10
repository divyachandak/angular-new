import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { InterploationComponent } from './interploation/interploation.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { EventComponent } from './event/event.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { from } from 'rxjs';
import { ChangeTextColorComponent } from './change-text-color/change-text-color.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { PComponent } from './custom-i/p/p.component';
import { CustomInputOutputComponent } from './custom-input-output/custom-input-output.component';

@NgModule({
  declarations: [
    AppComponent,
    InterploationComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    EventComponent,
    TwoWayBindingComponent,
    ChangeTextColorComponent,
    CalculatorComponent,
    PComponent,
    CustomInputOutputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
