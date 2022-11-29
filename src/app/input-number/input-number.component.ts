import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Zapatillas } from '../zapatillas-list/zapatillas';

@Component({
  selector: 'app-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.css']
})
export class InputNumberComponent implements OnInit {

  constructor() { }
  
  @Input()
  cantidad!: number;

  @Output()
  cantidadChange: EventEmitter<number> = new EventEmitter<number>(); 

  @Input()
  max!: number;
  ngOnInit(): void {
  }

  aumentarCantidad() : void { 
    if (this.cantidad < this.max) {
      this.cantidad++;
      this.cantidadChange.emit(this.cantidad);
    }
  }

  bajarCantidad() : void { 
    if (this.cantidad > 0 ) {
      this.cantidad--;
      this.cantidadChange.emit(this.cantidad);
    }
  }

  cambiarCantidad (event: { preventDefault: () => void; }) {
    event.preventDefault();
    this.cantidadChange.emit(this.cantidad);
  }
}
