import { Component, OnInit } from '@angular/core';
import { ZapatillasOpinionesService } from '../zapatillas-data-opiniones.service';
import { Opiniones } from './opiniones';

@Component({
  selector: 'app-zapatillas-opiniones',
  templateUrl: './zapatillas-opiniones.component.html',
  styleUrls: ['./zapatillas-opiniones.component.css']
})
export class ZapatillasOpinionesComponent implements OnInit {

  opiniones : Opiniones [] = [];


  constructor(
    private ZapatillasOpinionesService: ZapatillasOpinionesService) {
      
     }

  ngOnInit(): void {
    this.ZapatillasOpinionesService.traerOpiniones()
   .subscribe(opiniones => this.opiniones = opiniones);
      }

}
