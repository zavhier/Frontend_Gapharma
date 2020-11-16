import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PedidosComponent } from './pages/pedidos/pedidos.component';
import { LoginComponent } from './pages/login/login.component';
import { ClientesComponent } from './pages/clientes/clientes.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'pedidos', component: PedidosComponent },
  { path: 'pedidos/:id', component: PedidosComponent },
  { path: 'clientes', component: ClientesComponent}
];



@NgModule({
  declarations: [],
 // imports: [   CommonModule   ]
  imports :[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
