import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HeroeModel } from '../models/heroe.model';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private url = 'https://fir-6d0cf.firebaseio.com';

  constructor(private http: HttpClient) { }

  crearHeroe(heroe: HeroeModel){

    return this.http.post(`${this.url}/heroes.json`, heroe).pipe(
      map( (resp:any) => {
        heroe.id = resp.name;
        return heroe;
      })

    );
  }


}
