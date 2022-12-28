import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MobilesComponent } from './mobiles/mobiles.component';
import { DressesComponent } from './dresses/dresses.component';
import { AngularFormsComponent } from './angular-forms/angular-forms.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProductsComponent } from './products/products.component';
const routes: Routes = [
  // {path:'',redirectTo:'/dresses',pathMatch:'full'},
  {path:'mobiles',component:MobilesComponent },
  {path:'dresses',component:DressesComponent},
  {path:'dresses/:id',component:ProductsComponent},
  {path:'forms',component:AngularFormsComponent},
  // {path:'**',component:PagenotfoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[MobilesComponent ,DressesComponent,AngularFormsComponent ]
