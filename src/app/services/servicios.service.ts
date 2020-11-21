import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Servicio} from '../models/servicios.models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {
  urlEndPoint : string = 'http://localhost:54375/api/Servicio';
  constructor( private http  : HttpClient) { }

  getAll():Observable<Servicio[]>{
    return this.http.get<Servicio[]>(this.urlEndPoint);
  }

}
