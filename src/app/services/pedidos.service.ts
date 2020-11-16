import { Injectable } from '@angular/core';
import {HttpClient}  from  '@angular/common/http';
import { Observable } from 'rxjs';
import {Pedido} from  '../models/pedidos.model';
@Injectable({
  providedIn: 'root'
})
export class PedidosService {
  
  urlEndPoint : string = 'http://localhost:54375/api/Pedido';
  constructor(private http : HttpClient) { }

  get() : Observable<Pedido[]>{
    return this.http.get<Pedido[]>(this.urlEndPoint);
  } 
  getListById(cliente_id : number):Observable<Pedido[]>{
     return  this.http.get<Pedido[]>(`${this.urlEndPoint}/${cliente_id}`);
  }
  getById(cliente_id : number){
    return  this.http.get<Pedido[]>(`${this.urlEndPoint}/${cliente_id}`);
  }
}
