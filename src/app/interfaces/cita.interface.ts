interface Cita {
  idCita:string;
  estado:string;
  paciente_id:Paciente;
  medico_id:Medico;
  fecha:Date;
  tipoPago:string;
}