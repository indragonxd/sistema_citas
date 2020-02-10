import { Component, OnInit } from '@angular/core';
import { EspecialidadService } from 'src/app/services/especialidad.service';
import { MedicoService } from 'src/app/services/medico.service';

@Component({
  selector: 'app-recerva-citas',
  templateUrl: './recerva-citas.component.html',
  styleUrls: ['./recerva-citas.component.css']
})
export class RecervaCitasComponent implements OnInit {
  especialidades: Especialidad[];
  medicos: Medico[];
  especialidadSelect:string;
  medicosFiltrados: string[];
  medicoSelect: string[];
  horario:Horario[];
  citaGenerada:Cita;
  constructor(private especialidadService:EspecialidadService, private medicoService:MedicoService) { 
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
    console.log($event.target.value);
    this.especialidadSelect = $event.target.value;
    //this.medicosFiltrados = this.getMedicosFiltrados(this.especialidadSelect);
    console.log(this.especialidadSelect.substr(0,1));
  }
  getMedicosFiltrados(especialidadSelect){
    //return this.medicos.filter(med => med.substr(0,1) == this.especialidadSelect.substr(0,1));
  }
  llenarTabla($event){
    //ponemos los horarios de un doctor
    this.medicoSelect = $event.target.value;
    
  }
}
