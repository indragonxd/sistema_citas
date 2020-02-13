import { Component, OnInit } from '@angular/core';
import { EspecialidadService } from 'src/app/services/especialidad.service';
import { MedicoService } from 'src/app/services/medico.service';
import { CitaService } from 'src/app/services/cita.service';
import { PacienteService } from 'src/app/services/paciente.service';
import { Router } from '@angular/router';

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
  constructor(private especialidadService:EspecialidadService, private medicoService:MedicoService, private pacienteService:PacienteService, private citaService:CitaService,private router: Router) { 
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
    let cita:Cita;
    this.medicoService.getMedicoById(this.medicoSelect).subscribe(data => {
      cita.medico_id = data;
    });
    this.pacienteService.getPacienteById("tu dni pavaso").subscribe(data => {
      cita.paciente_id = data;
    });
    cita.fecha = this.fechaCita;
    this.citaService.crearCita(cita).subscribe(data => {
      if(data != null){
        //dialog = true;
        this.router.navigate(['/historial-citas']);
      }
    });
  }
}
