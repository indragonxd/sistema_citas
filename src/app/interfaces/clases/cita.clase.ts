export class cita implements Cita{
    tipoPago: string;
    idCita: string;    
    estado: string;
    paciente_id: Paciente;
    medico_id: Medico;
    fecha: Date;
}