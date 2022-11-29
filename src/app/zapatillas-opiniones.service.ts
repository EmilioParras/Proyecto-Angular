import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Opiniones } from './zapatillas-opiniones/Opiniones';


const URL = "https://62b323824f851f87f4552755.mockapi.io/api/zapatillas/opiniones"

@Injectable({
  providedIn: 'root'
})

export class ZapatillasOpinionesService {

  constructor(private http: HttpClient) { }

    public traerOpiniones(opinion : Opiniones) {

      return this.http.get<Opiniones[]>(URL)
         
     }

}
