import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReservaCitasComponent } from './components/reserva-citas/reserva-citas.component'
import { HistorialCitasComponent } from './components/historial-citas/historial-citas.component'
import { PerfilComponent } from './components/perfil/perfil.component'
import { EspecialidadesComponent } from './components/especialidades/especialidades.component'
import { RegistrarPagoComponent } from './components/registrar-pago/registrar-pago.component'
const routes: Routes = [
  {
  path: 'reserva-cita',
  component: ReservaCitasComponent
  },
  {
    path: 'perfil',
    component: PerfilComponent
  },
  {
    path: 'historial-citas',
    component: HistorialCitasComponent
  },
  {
    path: 'especialidades',
    component: EspecialidadesComponent
  },
  {
    path: 'registrar-pago',
    component: RegistrarPagoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
