import { Component, OnInit } from '@angular/core';
import { Pedido } from '../../models/pedidos.model';
import {PedidosService} from '../../services/pedidos.service';
import {ActivatedRoute} from  '@angular/router';
import {DestinatariosService} from  '../../services/destinatarios.service';
import { Destianatario } from 'src/app/models/destinatarios.model';
@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  sListPedidos : Pedido [] =[];
  sCliente_id  : number = 0;
  estaBuscando: boolean;
  _termino:string = '';
  sListDestinatario : Destianatario [] = [];
  constructor(private  _pedidoService : PedidosService, private activatedRoute : ActivatedRoute, private _destinatarioService : DestinatariosService) { }

   ngOnInit(): void {
    this.activatedRoute.params
      .subscribe( params => { 
     this.sCliente_id = params['id'];
          debugger;
          if (this.sCliente_id > 0) {
                this._pedidoService.getListById(this.sCliente_id).subscribe(resp=>{
                  this.sListPedidos = resp;
              })
               this._destinatarioService.getByIdAll(this.sCliente_id).subscribe(resp=>{
                  this.sListDestinatario = resp;
               });
          } else {
            this._pedidoService.get().subscribe(resp=>{
              this.sListPedidos = resp; 
            });
          }    
     });

    } 
    
    
  VaciarBusqueda( xTermino: string ){
    if( xTermino.length == 0 ){
      
    }
  }
  buscar(xTermino: string){
    
  }
  
}
