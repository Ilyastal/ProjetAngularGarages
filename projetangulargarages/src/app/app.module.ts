import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginsComponent } from './core/logins/components/logins.component';
import { HttpClientModule } from '@angular/common/http';
import { ClientcrudComponent } from './core/clientcrud/clientcrud.component';
import { ServiceGenService } from './servicesCore/service-gen.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,

    LoginsComponent,

    ClientcrudComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
 
  ],
  providers: [ServiceGenService],
  bootstrap: [AppComponent]
})
export class AppModule { }
