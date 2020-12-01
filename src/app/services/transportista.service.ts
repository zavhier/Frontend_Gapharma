import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transportista} from '../models/Transportista.models';
import  {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TransportistaService {
  urlEndPoint : string = 'http://localhost:54375/api/Transportista';
  constructor(private  http: HttpClient) { }

  
  getByIdAll(sVehiculoId: number): Observable<Transportista[]>{
    return this.http.get<Transportista[]>(`${this.urlEndPoint}/${sVehiculoId}`);
}


}
