import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PedidosComponent } from './pages/pedidos/pedidos.component';
import { LoginComponent } from './pages/login/login.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { DestinatariosComponent } from './pages/destinatarios/destinatarios.component';
import { PersonasComponent } from './pages/personas/personas.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'pedidos', component: PedidosComponent },
  { path: 'pedidos/:id', component: PedidosComponent },
  { path: 'clientes', component: ClientesComponent},
  { path: 'Destinatarios', component : DestinatariosComponent},
  { path: 'Personas' , component : PersonasComponent}
  
];



@NgModule({
  declarations: [],
 // imports: [   CommonModule   ]
  imports :[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
