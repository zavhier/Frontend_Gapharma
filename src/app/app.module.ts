import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MenuComponent } from './pages/menu/menu.component';
import { FooterComponent } from './pages/footer/footer.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import {HttpClientModule} from '@angular/common/http';
import {ClientesService} from './services/clientes.service';
import { PedidosComponent } from './pages/pedidos/pedidos.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './pages/login/login.component';
import {PedidosService} from './services/pedidos.service';
import { DestinatariosService } from  './services/destinatarios.service'
import {ServiciosService} from './services/servicios.service';
import {PaquetesService} from './services/paquetes.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from  '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { DestinatariosComponent } from './pages/destinatarios/destinatarios.component';
import {PersonasService}  from  './services/personas.service';
import { PersonasComponent } from './pages/personas/personas.component';
import Swal from 'sweetalert2';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    ClientesComponent,
    PedidosComponent,
    LoginComponent,
    DestinatariosComponent,
    PersonasComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-center',
      preventDuplicates: true,
    }),
  ],
  providers: [
    ClientesService, 
    PedidosService,
    DestinatariosService,
    ServiciosService,
    PaquetesService,
    PersonasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
