import { Component, OnInit } from '@angular/core';
import {ClientesService} from '../..//services/clientes.service';
import { Cliente } from 'src/app/models/clientes.model';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  _listCliente : Cliente [] =[];

  constructor(private _clientesService : ClientesService) { }

  ngOnInit(): void {
      this._clientesService.getAll().subscribe(resp=>{
           this._listCliente = resp;
          console.log(this._listCliente);
          
      })
  
  }

}
