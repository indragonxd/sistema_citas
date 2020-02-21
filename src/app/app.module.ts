import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule } from  '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ReservaCitasComponent } from './components/reserva-citas/reserva-citas.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { HistorialCitasComponent } from './components/historial-citas/historial-citas.component';
import { EspecialidadesComponent } from './components/especialidades/especialidades.component';
import { TipoPagoComponent } from './components/reserva-citas/tipo-pago/tipo-pago.component';
import { EspecialidadVerMasComponent } from './components/especialidades/especialidad-ver-mas/especialidad-ver-mas.component';
import { RegistrarPagoComponent } from './components/reserva-citas/tipo-pago/registrar-pago/registrar-pago.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    ReservaCitasComponent,
    PerfilComponent,
    HistorialCitasComponent,
    EspecialidadesComponent,
    TipoPagoComponent,
    EspecialidadVerMasComponent,
    RegistrarPagoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
