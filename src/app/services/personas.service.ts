import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Persona}  from '../models/persona.models'
@Injectable({
  providedIn: 'root'
})
export class PersonasService {
  urlEndPoint : string = 'http://localhost:54375/api/Persona';
  constructor(private http : HttpClient) { }

  getByid(sPersona_id : number): Observable<Persona>{
    debugger;
      return this.http.get<Persona>(`${this.urlEndPoint}/${sPersona_id}`);
  }
  getAll(): Observable<Persona[]>{
    return  this.http.get<Persona[]>(this.urlEndPoint);
  }
  save(sPersona  : Persona):Observable<Persona>{
    return  this.http.post<Persona>(this.urlEndPoint, sPersona);
  }
}
