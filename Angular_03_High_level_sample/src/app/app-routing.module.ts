import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MobilesComponent } from './mobiles/mobiles.component';
import { DressesComponent } from './dresses/dresses.component';
import { AngularFormsComponent } from './angular-forms/angular-forms.component';
const routes: Routes = [
  {path:'mobiles',component:MobilesComponent },
  {path:'dresses',component:DressesComponent},
  {path:'forms',component:AngularFormsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[MobilesComponent ,DressesComponent,AngularFormsComponent ]