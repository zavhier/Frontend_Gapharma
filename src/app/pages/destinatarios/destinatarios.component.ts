import { Component, OnInit } from '@angular/core';
import { Destianatario } from 'src/app/models/destinatarios.model';
import { ClientesService } from 'src/app/services/clientes.service';
import { PersonasService } from 'src/app/services/personas.service';
import Swal from 'sweetalert2';
import {DestinatariosService} from '../../services/destinatarios.service';
import { Persona} from  '../../models/persona.models';
import { ToastrModule } from 'ngx-toastr';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-destinatarios',
  templateUrl: './destinatarios.component.html',
  styleUrls: ['./destinatarios.component.css']
})
export class DestinatariosComponent implements OnInit {

  sListDestinatrio: Destianatario [] = [];
  sListPersona  : Persona  []  = [] ;
  constructor(private _destinatarioService : DestinatariosService, private _clienteService : ClientesService , 
    private _servicioPersona  : PersonasService,  private toastr : ToastrService) { }
  estaBuscando: boolean;
  _termino:string = '';
  sPersona : Persona = new Persona();
  ngOnInit(): void {
    this.toastr.success('Se creo una nueva solicitud!', 'Toastr fun!');  
      this._destinatarioService.getByIdAll(this._clienteService.sClienteService).subscribe(resp=>{
          this.sListDestinatrio = resp;
      })

      this._servicioPersona.getAll().subscribe(resp=>{
         this.sListPersona = resp;
      })
   
  }
  VaciarBusqueda( xTermino: string ){
    if( xTermino.length == 0 ){
      
    }
  }
  buscar(xTermino: string){
    
  }
  getPersona(sPersona : number){
       this._servicioPersona.getByid(sPersona).subscribe(resp=>{
        Swal.fire({
          position: 'top',
          icon: 'success',
          title:  resp.APELLIDO + " " + resp.NOMBRE + " "  + resp.TELEFONO_1,
          showConfirmButton: false,
          timer: 1500
        })
    })
    
    
    
  }
  onSave(){
      console.log(this.sPersona);
        this._servicioPersona.save(this.sPersona).subscribe(resp=>{
        
      })
  }
}
