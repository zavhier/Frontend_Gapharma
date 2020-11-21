import { Injectable } from '@angular/core';
import {HttpClient}  from  '@angular/common/http';
import { Observable } from 'rxjs';
import {Destianatario} from '../models/destinatarios.model';
@Injectable({
  providedIn: 'root'
})
export class DestinatariosService {
  urlEndPoint : string = 'http://localhost:54375/api/Destinatario';
  constructor(private http  : HttpClient) { }

  getByIdAll(sCliente_id : number):Observable<Destianatario[]>{
    debugger;
    return this.http.get<Destianatario[]>(`${this.urlEndPoint}/${sCliente_id}`);
  }
  save(sDestinatario : Destianatario):Observable<Destianatario>{
    return  this.http.post<Destianatario>(this.urlEndPoint , sDestinatario);
  }
}
