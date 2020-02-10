import { Component, OnInit } from '@angular/core';
import { EspecialidadService } from 'src/app/services/especialidad.service';
import { MedicoService } from 'src/app/services/medico.service';
import { HorarioService } from 'src/app/services/horario.service';

@Component({
  selector: 'app-recerva-citas',
  templateUrl: './recerva-citas.component.html',
  styleUrls: ['./recerva-citas.component.css']
})
export class RecervaCitasComponent implements OnInit {
  especialidades: Especialidad[];
  medicos: Medico[];
  especialidadSelect:string;
  medicosFiltrados: Medico[];
  medicoSelect: string[];
  horarios:Horario[];
  citaGenerada:Cita;
  constructor(private especialidadService:EspecialidadService, private medicoService:MedicoService, private horarioService:HorarioService) { 
    //this.especialidades = ['oto','trauma','faring'];
    //this.medicos = ['otosherwin','otomarqquez','otovale','traumabrian','traumaorellana','fajen','faron','faree'];
    this.especialidadService.getEspecialidades().
    subscribe(data=>{
      this.especialidades=data;
    });
    this.medicoService.getMedicos().
    subscribe(data=>{
      this.medicos=data;
    });
  }
    
  ngOnInit() {
  }
  actualizarSelect($event){
    this.especialidadSelect = $event.target.value;
    this.medicosFiltrados = this.getMedicosFiltrados(this.especialidadSelect);
  }
  getMedicosFiltrados(especialidadSelect){
    return this.medicos.filter(med => med.especialidad_id.idEspecialidad == this.especialidadSelect);
  }
  llenarTabla($event){
    //ponemos los horarios de un doctor
    this.medicoSelect = $event.target.value;
    //cargamos los horarios del doctor
    this.horarioService.getHorariosByIdMedico(this.medicoSelect).
    subscribe(data=>{
      this.horarios=data;
    });
  }
}
