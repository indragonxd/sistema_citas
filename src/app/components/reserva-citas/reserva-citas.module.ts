import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservaCitasComponent } from './reserva-citas.component';
import { ReservaCitasRoutingModule } from './reserva-citas.routing.module';



@NgModule({
  declarations: [ReservaCitasComponent],
  imports: [
    CommonModule,
    ReservaCitasRoutingModule
  ]
})
export class ReservaCitasModule { }
