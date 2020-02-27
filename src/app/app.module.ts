import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ReservaCitasComponent } from './components/reserva-citas/reserva-citas.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { HistorialCitasComponent } from './components/historial-citas/historial-citas.component';
import { EspecialidadesComponent } from './components/especialidades/especialidades.component';
import { TipoPagoComponent } from './components/reserva-citas/tipo-pago/tipo-pago.component';
import { EspecialidadVerMasComponent } from './components/especialidades/especialidad-ver-mas/especialidad-ver-mas.component';
import { LoginComponent } from './components/login/login.component';
import { CargaManualHorarioComponent } from './components/carga-horario/carga-manual-horario/carga-manual-horario.component';
import { CargaMasivaHorarioComponent } from './components/carga-horario/carga-masiva-horario/carga-masiva-horario.component';
import { MedicoCombosComponent } from './components/carga-horario/carga-manual-horario/medico-combos/medico-combos.component';
import { NgxDropzoneModule } from 'ngx-dropzone';
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
    LoginComponent,
    CargaManualHorarioComponent,
    CargaMasivaHorarioComponent,
    MedicoCombosComponent
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
    FormsModule,
    NgbModule,
    NgxDropzoneModule
  ],
  providers: [FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
