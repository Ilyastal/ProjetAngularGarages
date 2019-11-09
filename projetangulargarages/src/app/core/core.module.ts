import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientcrudComponent } from './clientcrud/clientcrud.component';



@NgModule({
  declarations: [ClientcrudComponent],
  imports: [
    CommonModule
  ],
  exports:[
    ClientcrudComponent
  ]
})
export class CoreModule { }
