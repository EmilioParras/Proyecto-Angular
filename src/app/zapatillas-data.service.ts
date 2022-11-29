import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Zapatillas } from './zapatillas-list/zapatillas';

const URL = 'https://62b323824f851f87f4552755.mockapi.io/api/zapatillas/apiPrueba';

@Injectable({
  providedIn: 'root'
})
export class ZapatillasDataService {

  constructor(private http: HttpClient) { }

  public traerTodo(): Observable<Zapatillas[]> {

   return this.http.get<Zapatillas[]>(URL)
      .pipe(
        tap((zapatillas: Zapatillas[]) =>(zapatillas.forEach(zapatillas => zapatillas.cantidad = 0))) 
      );
  }
}
