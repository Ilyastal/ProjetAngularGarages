import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginsComponent } from './core/logins/components/logins.component';


const routes: Routes = [



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
