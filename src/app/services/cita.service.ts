import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CitaService {
  citas: Cita[];
  cita: Cita;
  
  constructor(private http: HttpClient) { 

  }
  getCitas(dni:string){
    //mediante un llmado httpcliente
    //ahora tienes que filtrar la cita por id de paciente
    return this.http.get<Cita[]>('http://localhost:8080/clinica/citas/paciente/' + dni);
    
  }
  crearCita(cita:Cita){
    console.log('Generando la cita...');
    console.log(cita.paciente_id.dni + '_' +cita.medico_id.idMedico + '_' + cita.idCita + '_' + cita.fecha);
    return this.http.post('http://localhost:8080/clinica/citas',cita);
  }
}
