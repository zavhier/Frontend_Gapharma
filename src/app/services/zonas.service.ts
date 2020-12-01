import { Injectable } from '@angular/core';
import  {HttpClient} from '@angular/common/http';
import { _MatOptionBase } from '@angular/material/core';
import { Observable } from 'rxjs';
import { Zonas} from '../models/Zonas.models';
@Injectable({
  providedIn: 'root'
})
export class ZonasService {
  urlEndPoint : string = 'http://localhost:54375/api/Zonas';
  constructor(private  http: HttpClient) { }

  getByIdAll(sCodigoPostal: number): Observable<Zonas[]>{
      return this.http.get<Zonas[]>(`${this.urlEndPoint}/${sCodigoPostal}`);
  }
}
