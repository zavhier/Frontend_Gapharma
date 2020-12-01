import { Injectable } from '@angular/core';
import { Vehiculo} from '../models/Vehiculo.models';
import  {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class VehiculosService {

  urlEndPoint : string = 'http://localhost:54375/api/Vehiculo';
  constructor(private  http: HttpClient) { }

  getByIdAll(sZonaId: number): Observable<Vehiculo[]>{
    return this.http.get<Vehiculo[]>(`${this.urlEndPoint}/${sZonaId}`);
}
}
