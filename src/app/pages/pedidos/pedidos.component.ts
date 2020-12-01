import { Component, OnInit } from '@angular/core';
import { Pedido } from '../../models/pedidos.model';
import {PedidosService} from '../../services/pedidos.service';
import {ActivatedRoute} from  '@angular/router';
import {DestinatariosService} from  '../../services/destinatarios.service';
import { Destianatario } from '../../models/destinatarios.model';
import { ServiciosService } from 'src/app/services/servicios.service';
import { Servicio } from '../../models/servicios.models';
import { PaquetesService } from 'src/app/services/paquetes.service';
import {Paquete} from '../../models/paquetes.models';
import {CabeceraDocumento} from '../../models/Cabecera_documento.model';
import { Detalle_documento } from '../../models/Detalle_documento.model';
import {Estado}  from  '../../enums/estado.enum';
import { ToastrService } from 'ngx-toastr';
import { ClientesService } from 'src/app/services/clientes.service';
import { Zonas } from 'src/app/models/Zonas.models';
import {ZonasService}  from '../../services/zonas.service';
import {VehiculosService}  from '../../services/vehiculos.service';
import {TransportistaService}  from '../../services/transportista.service';
import { Vehiculo } from 'src/app/models/Vehiculo.models';
@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  sListPedidos : Pedido [] =[];
  sListServicio : Servicio  [] =[];
  sCliente_id  : number = 0;
  estaBuscando: boolean;
  _termino:string = '';
  _tipoDeServicio:string = '';
  sListDestinatario : Destianatario [] = [];
  sListPaquetes : Paquete [] =[];
  sTipoDePaquete: string;
  sCabeceraDocumento  : CabeceraDocumento = new CabeceraDocumento();
  sDetallle : Detalle_documento = new Detalle_documento();
  sListZonas  : Zonas[]  = [];
  sCantidad : number =0;
  sPaquete_id : number;
  sNombrePaquete: string;
  sServicio : number;
  sListVehiculo : Vehiculo [] =[];

  constructor(private  _pedidoService : PedidosService, private activatedRoute : ActivatedRoute,
     private _destinatarioService : DestinatariosService, private _servicioService : ServiciosService,
     private _paqueteService : PaquetesService , private _zonaService : ZonasService, private _vehiculoService : VehiculosService, private _transportistaServices: TransportistaService,
     private toastr: ToastrService, private _clienteService : ClientesService) { }

   ngOnInit(): void {
    
    this.activatedRoute.params
      .subscribe( params => { 
       this.sCliente_id = params['id'];
       debugger;
       this._clienteService.sClienteService = this.sCliente_id;
          debugger;
          if (this.sCliente_id > 0) {
                this._pedidoService.getListById(this.sCliente_id).subscribe(resp=>{
                  this.sListPedidos = resp;
              })
               this._destinatarioService.getByIdAll(this.sCliente_id).subscribe(resp=>{
                  this.sListDestinatario = resp;
               });
              this._servicioService.getAll().subscribe(resp=>{
                 this.sListServicio = resp;
              })
              this._paqueteService.getAll().subscribe(resp=>{
                  this.sListPaquetes = resp;
              })
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
  change(value:number){
    this.sServicio = value;
    this.sListServicio.forEach(e=> {
         if(e.SERVICIO_ID== value)
                this._tipoDeServicio = e.DESCRIPCION;

    });
        
  }
  changePaquete(value : number){
    this.sPaquete_id = value;
    debugger;
         this.sListPaquetes.forEach(e=>{
            if(e.PAQUETE_ID == value)
                this.sTipoDePaquete =`${e.DESCRIPCION} - ${e.PESO}Kg - ${e.ALTO}A,${e.ANCHO}A, ${e.PROFUNDIDAD} P` ;
                this.sNombrePaquete =`${e.DESCRIPCION} - ${e.PESO}Kg - ${e.ALTO}A,${e.ANCHO}A, ${e.PROFUNDIDAD} P` ;
            });
  } 

  onEnter(event){  
        let cabDetalle = new Detalle_documento();
        cabDetalle.CANTIDAD = event.target.value;
        cabDetalle.PAQUETE_ID = this.sPaquete_id;
        cabDetalle.NOMBRE = this.sNombrePaquete
        this.sCabeceraDocumento.Detalle.push(cabDetalle); 
  }


  onSave(){
    this.sCabeceraDocumento.ESTADO_ID = Estado.EnProgreso;
    this.sCabeceraDocumento.CLIENTE_ID =   this.sCliente_id;
    this.sCabeceraDocumento.EMPRESA_ID = 1;
    this.sCabeceraDocumento.SERVICIO_ID = this.sServicio;
       this._pedidoService.save(this.sCabeceraDocumento).subscribe(resp=>{
          console.log('Se guardor correctamente ');
          this.toastr.success('Se creo una nueva solicitud!', 'Toastr fun!');  
       });
  }

  onAsignar(sPedido : Pedido){
      this._zonaService.getByIdAll(sPedido.Codigo_postal).subscribe(resp=>{
            this.sListZonas = resp;

            console.log(this.sListZonas);
      })

  }

  changeZona(value : number){
      this._vehiculoService.getByIdAll(value).subscribe(resp=>{
         this.sListVehiculo = resp;

      })
  }
}
