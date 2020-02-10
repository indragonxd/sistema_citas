import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecervaCitasComponent } from './components/recerva-citas/recerva-citas.component'
import { HistorialCitasComponent } from './components/historial-citas/historial-citas.component'
import { PerfilComponent } from './components/perfil/perfil.component'
import { EspecialidadesComponent } from './components/especialidades/especialidades.component'

const routes: Routes = [
  {
  path: 'recerva-cita',
  component: RecervaCitasComponent
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
