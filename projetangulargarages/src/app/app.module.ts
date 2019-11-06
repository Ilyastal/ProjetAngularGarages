import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommercialRoutingModule } from './commercial/commercial-routing.module';
import { MecanicRoutingModule } from './mecanic/mecanic-routing.module';
import { CommercialComponent } from './commercial/commercial.component';
import { MecanicComponent } from './mecanic/mecanic.component';
import { MecanicienComponent } from './mecanicien/mecanicien/mecanicien.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    CommercialComponent,
    MecanicComponent,
    MecanicienComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommercialRoutingModule,
    MecanicRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
