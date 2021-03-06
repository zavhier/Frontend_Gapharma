import { Injectable } from '@angular/core';
import {HttpClient } from  '@angular/common/http';
import { Observable } from 'rxjs';
import {Cliente} from '../models/clientes.model';
@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor( private  http: HttpClient) {


   }
  public getAll():Observable<Cliente[]>{
    return this.http.get<Cliente[]>('https://5d8e0e14370f02001405c813.mockapi.io/usuarios');
   }
}
