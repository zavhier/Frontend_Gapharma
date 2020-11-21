import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Paquete} from '../models/paquetes.models';  
@Injectable({
  providedIn: 'root'
})
export class PaquetesService {

  uri : string = 'http://localhost:54375/api/Paquete';
  constructor(private http : HttpClient) { }

  getAll():Observable<Paquete[]>{
      return this.http.get<Paquete[]>(this.uri);
  }
}
