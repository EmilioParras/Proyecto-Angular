import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Zapatillas } from './zapatillas-list/zapatillas';

@Injectable({
  providedIn: 'root'
})
export class ZapatillasCartService {
  
  private _carritoLista: Zapatillas[] = [];

  carritoLista: BehaviorSubject<Zapatillas[]> = new BehaviorSubject(this._carritoLista);

  constructor() { }
  
  agregarAlCarrito(zapatillas: Zapatillas) {
    let item  = this._carritoLista.find((v1) => v1.nombre == zapatillas.nombre);
    if (!item) {
      this._carritoLista.push({... zapatillas});  
    } else {
      item.cantidad += zapatillas.cantidad;
    }
    console.log(this._carritoLista);
    console.log(zapatillas);
    this.carritoLista.next(this._carritoLista); 
  }

}
