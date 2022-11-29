import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ZapatillasCartService } from '../zapatillas-cart.service';
import { Zapatillas } from '../zapatillas-list/zapatillas';

@Component({
  selector: 'app-carrito-de-compra',
  templateUrl: './carrito-de-compra.component.html',
  styleUrls: ['./carrito-de-compra.component.css']
})
export class CarritoDeCompraComponent implements OnInit {

  carritoLista$!: Observable<Zapatillas[]>;

  constructor(private carrito : ZapatillasCartService ) { 
  this.carritoLista$ = carrito.carritoLista.asObservable();
  }

  ngOnInit(): void {
  }

}
