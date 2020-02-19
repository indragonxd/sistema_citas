import { Component, OnInit } from '@angular/core';
import { EspecialidadService } from 'src/app/services/especialidad.service';

@Component({
  selector: 'app-especialidades',
  templateUrl: './especialidades.component.html',
  styleUrls: ['./especialidades.component.css']
})
export class EspecialidadesComponent implements OnInit {
  especialidades : Especialidad[];
  
  constructor(private especialidadService:EspecialidadService) {
  }

  ngOnInit() {
    this.especialidadService.getEspecialidades().
    subscribe(data=>{
      this.especialidades=data;
    })
    //console.log(this.especialidades);
  }
  verDoctores(idEspecialidad){
    
  }

}
