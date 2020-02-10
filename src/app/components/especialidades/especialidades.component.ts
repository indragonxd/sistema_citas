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
    this.especialidades = this.especialidadService.getEspecialidades();
    console.log(this.especialidades);
  }

}
