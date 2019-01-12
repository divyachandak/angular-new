import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainPricingComponent } from './main-pricing/main-pricing.component';
import { HeaderComponent } from './main-pricing/header.component';
import { InfoTitleComponent } from './main-pricing/info-title.component';
import { FooterComponent } from './main-pricing/footer/footer.component';
import { LogoComponent } from './main-pricing/footer/logo.component';
import { ResourcesComponent } from './main-pricing/footer/resources.component';
import { FeatureComponent } from './main-pricing/footer/feature.component';
import { AboutComponent } from './main-pricing/footer/about.component';
import { CardComponent } from './main-pricing/card/card.component';
import { CardOneComponent } from './main-pricing/card/card-one.component';
import { CardTwoComponent } from './main-pricing/card/card-two.component';
import { CardThreeComponent } from './main-pricing/card/card-three.component';


@NgModule({
  declarations: [
    AppComponent,
    MainPricingComponent,
    HeaderComponent,
    InfoTitleComponent,
    FooterComponent,
    LogoComponent,
    ResourcesComponent,
    FeatureComponent,
    AboutComponent,
    CardComponent,
    CardOneComponent,
    CardTwoComponent,
    CardThreeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
