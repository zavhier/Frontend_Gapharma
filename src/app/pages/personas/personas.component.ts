import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/persona.models';
import { PersonasService } from 'src/app/services/personas.service';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {

  sListPersona : Persona [] =[];
  constructor(private _personaService : PersonasService) { }
  ngOnInit(): void {
     this._personaService.getAll().subscribe(resp=>{
        this.sListPersona = resp;
     })
  }

}
