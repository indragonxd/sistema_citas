import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MedicoService } from 'src/app/services/medico.service';
import { EspecialidadService } from 'src/app/services/especialidad.service';

@Component({
  selector: 'app-especialidad-ver-mas',
  templateUrl: './especialidad-ver-mas.component.html',
  styleUrls: ['./especialidad-ver-mas.component.css']
})

export class EspecialidadVerMasComponent implements OnInit {
  idEspecialidad : string;
  medicos : Medico[];
  especialidad : Especialidad;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private medicoService:MedicoService ,
    private especialidadService:EspecialidadService) { }

  ngOnInit() {
    this.idEspecialidad = this.route.snapshot.params.idEspecialidad;
    
    this.especialidadService.getEspecialidadById(this.idEspecialidad).
    subscribe(data=>{
      this.especialidad=data;
    })

    this.medicoService.getMedicosByIdEspecialidad(this.idEspecialidad).
    subscribe(data=>{
      this.medicos=data;
    })

  }
  volver(){
    this.router.navigate(['/especialidades']);
  }
  reservarCita(){
    this.router.navigate(['/reserva-cita']);
  }
}
