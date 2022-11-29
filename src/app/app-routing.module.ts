import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ZapatillasAboutComponent } from './zapatillas-about/zapatillas-about.component';
import { ZapatillasComponentesComponent } from './zapatillas-componentes/zapatillas-componentes.component';
import { ZapatillasOpinionesComponent } from './zapatillas-opiniones/zapatillas-opiniones.component';

const routes : Routes = [
  {
    path: '',
    redirectTo: 'zapatillas',
    pathMatch:  'full'    
  },
  {
    path: 'zapatillas',
    component: ZapatillasComponentesComponent
  },
  {
    path: 'sobre-nosotros',
    component:  ZapatillasAboutComponent
  },
  {
    path: 'opiniones',
    component:  ZapatillasOpinionesComponent
  }
];

@NgModule({
 imports : [RouterModule.forRoot(routes)],
 exports: [RouterModule]
})
export class AppRoutingModule { }
