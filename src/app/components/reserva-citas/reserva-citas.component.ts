import { Component, OnInit } from '@angular/core';
import { EspecialidadService } from 'src/app/services/especialidad.service';
import { MedicoService } from 'src/app/services/medico.service';
import { CitaService } from 'src/app/services/cita.service';
import { PacienteService } from 'src/app/services/paciente.service';
import { Router } from '@angular/router';
import { HorarioService } from 'src/app/services/horario.service';

@Component({
  selector: 'app-reserva-citas',
  templateUrl: './reserva-citas.component.html',
  styleUrls: ['./reserva-citas.component.css']
})
export class ReservaCitasComponent implements OnInit {
  especialidades: Especialidad[];
  medicos: Medico[];
  especialidadSelect:string;
  medicosFiltrados: Medico[];
  medicoSelect: string;
  horarios:Horario[];
  fechaCita:Date;


  constructor(private especialidadService:EspecialidadService, private medicoService:MedicoService, private pacienteService:PacienteService, private citaService:CitaService,private horarioService:HorarioService,private router: Router) { 
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
    this.horarioService.getHorariosByIdMedico(this.medicoSelect).subscribe(data => {
      this.horarios = data;
    })

  }
  async generarCita(){
    //ya tenemos el idPaciente
    //tenemos codigo del doctor
    let citaMedica: cita = {
      estado: '',
      idCita: '',
      fecha: new Date(),
      medico_id: null,
      paciente_id: null
    };
    await this.medicoService.getMedicoById(this.medicoSelect).subscribe(data => {
      citaMedica.medico_id = data;
    });
    await this.pacienteService.getPacienteById("73524246").subscribe(data => {
      citaMedica.paciente_id = data;
    });
    console.log(this.fechaCita);
    //cita.fecha = this.fechaCita;
    /*this.citaService.crearCita(cita).subscribe(data => {
      console.log(data);
      console.log(cita);
      if(data != null){
        //dialog = true;
        this.router.navigate(['/historial-citas']);
      }
    });*/
  }
}
