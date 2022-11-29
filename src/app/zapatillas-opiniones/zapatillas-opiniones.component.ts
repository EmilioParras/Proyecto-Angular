import { Component, OnInit } from '@angular/core';
import { ZapatillasDataOpinionesService } from '../zapatillas-data-opiniones.service';
import { Opiniones } from './opiniones';

@Component({
  selector: 'app-zapatillas-opiniones',
  templateUrl: './zapatillas-opiniones.component.html',
  styleUrls: ['./zapatillas-opiniones.component.css']
})
export class ZapatillasOpinionesComponent implements OnInit {

  opiniones : Opiniones [] = [];


  constructor(
    private ZapatillasDataOpinionesService: ZapatillasDataOpinionesService
  ) { }

  ngOnInit(): void {
    this.ZapatillasDataOpinionesService.traerTodo()
  .subscribe(opiniones => this.opiniones = opiniones);
  }

}
