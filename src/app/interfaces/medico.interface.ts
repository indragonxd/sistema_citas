interface Medico {
  idMedico:string;
  nombres:string;
  apellidoPaterno:string;
  apellidoMaterno:string;
  especialidad_id:Especialidad;
  horario_id:Horario[];
}