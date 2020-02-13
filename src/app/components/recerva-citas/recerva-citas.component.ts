import { Component, OnInit } from '@angular/core';
import { EspecialidadService } from 'src/app/services/especialidad.service';
import { MedicoService } from 'src/app/services/medico.service';
import { HorarioService } from 'src/app/services/horario.service';
import { CitaService } from 'src/app/services/cita.service';

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
  medicoSelect: string;
  horarios:Horario[];
  citaGenerada:Cita;
  fechaCita:Date;
  constructor(private especialidadService:EspecialidadService, private medicoService:MedicoService, private horarioService:HorarioService, private citaService:CitaService) { 
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
    this.medicosFiltrados = this.getMedicosFiltrados();
  }
  getMedicosFiltrados(){
    return this.medicos.filter(med => med.especialidad_id.idEspecialidad == this.especialidadSelect);
  }
  llenarTabla($event){
    //ponemos los horarios de un doctor
    this.medicoSelect = $event.target.value;
    console.log(this.medicoSelect);
    //cargamos los horarios del doctor
    this.medicoService.getMedicoById(this.medicoSelect).
    subscribe(data=>{
      this.horarios=data.horario_id;
    });
  }
  generarCita(){
    //ya tenemos el idPaciente
    //tenemos codigo del doctor
    //fecha
    let paciente:Paciente

    let cita:Cita;
    console.log(this.medicoSelect);
    console.log(this.fechaCita);
    cita.fecha=this.fechaCita;
    //cita.paciente_id
    //cita.medico_id = this.medicoSelect;
    this.citaService.crearCita(cita);
  }
}
