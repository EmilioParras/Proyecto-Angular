import { Component, OnInit } from '@angular/core';
import { ZapatillasCartService } from '../zapatillas-cart.service';
import { ZapatillasDataService } from '../zapatillas-data.service';
import { Zapatillas } from './zapatillas';

@Component({
  selector: 'app-zapatillas-list',
  templateUrl: './zapatillas-list.component.html',
  styleUrls: ['./zapatillas-list.component.css']
})

export class ZapatillasListComponent implements OnInit {
  
  zapatillas : Zapatillas [] = [];

constructor(
  private carrito : ZapatillasCartService,
  private zapatillasDataService: ZapatillasDataService) { 
}

ngOnInit(): void {
  this.zapatillasDataService.traerTodo()
  .subscribe(zapatillas => this.zapatillas = zapatillas);
}

aumentarCantidad(zapatilla : Zapatillas) {
  if (zapatilla.cantidad <= zapatilla.stock) {
    zapatilla.cantidad++;
  }
}

bajarCantidad(zapatilla : Zapatillas) {
  if (zapatilla.cantidad > 0) {
    zapatilla.cantidad--;
  }
}
agregarAlCarrito(zapatillas: any) : void {
  this.carrito.agregarAlCarrito(zapatillas);
  zapatillas.stock -= zapatillas.cantidad;
  zapatillas.cantidad = 0;     
}

}
