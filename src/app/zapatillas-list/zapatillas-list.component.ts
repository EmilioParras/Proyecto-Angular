import { Component, OnInit } from '@angular/core';
import { Zapatillas } from './zapatillas';

@Component({
  selector: 'app-zapatillas-list',
  templateUrl: './zapatillas-list.component.html',
  styleUrls: ['./zapatillas-list.component.css']
})

export class ZapatillasListComponent implements OnInit {
  
    zapatillas : Zapatillas [] = [
    {
      nombre: "Nike Air Force 1" ,
      marca: "Nike" ,
      talle: "42" ,
      precio: 25000,
      stock: 2,
      imagen: "assets/imagenes/nikeAirForce1.png", 
      descuento: true,
    }, 
    {
      nombre: "Jhon Foos Black Claw" ,
      marca: "Jhon Foos" ,
      talle: "40-41-42" ,
      precio: 20000,
      stock: 5,
      imagen: "assets/imagenes/nikeAirForce1.png", 
      descuento: false,
    },
    {
      nombre: "Adidas All Black" ,
      marca: "Adidas" ,
      talle: "40-42" ,
      precio: 15000,
      stock: 3,
      imagen: "assets/imagenes/nikeAirForce1.png", 
      descuento: false,
    },
]
  constructor() { }

  ngOnInit(): void {
  }

}
