import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Opiniones } from './zapatillas-opiniones/Opiniones';

const URL = 'https://62b323824f851f87f4552755.mockapi.io/api/zapatillas/opiniones';

@Injectable({
  providedIn: 'root'
})
export class ZapatillasDataOpinionesService {

  constructor(private http: HttpClient) { }

  public traerTodo(): Observable<Opiniones[]> {

   return this.http.get<Opiniones[]>(URL)
      
  }
}
