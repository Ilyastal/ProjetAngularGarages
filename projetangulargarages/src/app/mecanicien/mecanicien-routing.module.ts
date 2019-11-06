import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MecanicienComponent } from './mecanicien.component';
import { Routes } from '@angular/router';

const routes: Routes = [
  {path: 'mecanicien', component: MecanicienComponent}
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class MecanicienRoutingModule { }
