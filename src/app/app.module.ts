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
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    ClientesComponent,
    PedidosComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    ClientesService, 
    PedidosService,
    DestinatariosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
