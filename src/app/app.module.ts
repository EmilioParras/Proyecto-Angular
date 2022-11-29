import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ZapatillasListComponent } from './zapatillas-list/zapatillas-list.component';
import { FormsModule } from '@angular/forms';
import { ZapatillasAboutComponent } from './zapatillas-about/zapatillas-about.component';
import { CarritoDeCompraComponent } from './carrito-de-compra/carrito-de-compra.component';
import { ZapatillasComponentesComponent } from './zapatillas-componentes/zapatillas-componentes.component';
import { AppRoutingModule } from './app-routing.module';
import { InputNumberComponent } from './input-number/input-number.component';
import { ZapatillasOpinionesComponent } from './zapatillas-opiniones/zapatillas-opiniones.component';
@NgModule({
  declarations: [
    AppComponent,
    ZapatillasListComponent,
    ZapatillasAboutComponent,
    CarritoDeCompraComponent,
    ZapatillasComponentesComponent,
    InputNumberComponent,
    ZapatillasOpinionesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
