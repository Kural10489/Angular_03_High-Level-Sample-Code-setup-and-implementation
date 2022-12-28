import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule ,routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AngularFormsComponent } from './angular-forms/angular-forms.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProductsComponent } from './products/products.component';
import { DependencyInjectionComponent } from './dependency-injection/dependency-injection.component';
import { MathsService } from './services/maths.service';
import { DependencyComponent } from './dependency/dependency.component';
import { DependencySepareteConfigComponent } from './dependency-separete-config/dependency-separete-config.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    AngularFormsComponent,
    PagenotfoundComponent,
    ProductsComponent,
    DependencyInjectionComponent,
    DependencyComponent,
    DependencySepareteConfigComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    // NgbModule
  ],
  providers: [MathsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
