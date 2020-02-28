import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HistorialCitasComponent } from './components/historial-citas/historial-citas.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { EspecialidadesComponent } from './components/especialidades/especialidades.component';
import { EspecialidadVerMasComponent } from './components/especialidades/especialidad-ver-mas/especialidad-ver-mas.component';
import { TipoPagoComponent } from './components/reserva-citas/tipo-pago/tipo-pago.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { CargaManualHorarioComponent } from './components/carga-horario/carga-manual-horario/carga-manual-horario.component';
import { CargaMasivaHorarioComponent } from './components/carga-horario/carga-masiva-horario/carga-masiva-horario.component';
import { MedicoCombosComponent } from './components/carga-horario/carga-manual-horario/medico-combos/medico-combos.component';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('./components/login/login.module').then(
        m => m.LoginModule,
      ),
  },
  {
    path: '**',
    redirectTo: 'login',
  },
  {
    path: 'success/:dni',
    component: SidenavComponent,
    children: [
      {
        path: 'reserva-cita',
        loadChildren: () =>
          import('./components/reserva-citas/reserva-citas.module').then(
            m => m.ReservaCitasModule
          )
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
        path: 'especialidades/:idEspecialidad',
        component: EspecialidadVerMasComponent
      },
      {
        path: 'reserva-cita/:idMedico/:idPaciente/:fecha',
        component: TipoPagoComponent
      },
      {
        path: 'carga-manual-horario',
        component: CargaManualHorarioComponent
      },
      {
        path: 'carga-masiva-horario',
        component: CargaMasivaHorarioComponent
      },
      {
        path: 'carga-manual-horario/:idMedico',
        component: MedicoCombosComponent
      },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
