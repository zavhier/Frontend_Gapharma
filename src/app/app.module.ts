import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './pages/menu/menu.component';
import { FooterComponent } from './pages/footer/footer.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import {HttpClientModule} from '@angular/common/http';
import {ClientesService} from './services/clientes.service';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    ClientesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ClientesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
