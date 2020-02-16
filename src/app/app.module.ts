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

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    ReservaCitasComponent,
    PerfilComponent,
    HistorialCitasComponent,
    EspecialidadesComponent
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
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
