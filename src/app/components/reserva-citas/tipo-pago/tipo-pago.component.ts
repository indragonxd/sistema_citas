import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tipo-pago',
  templateUrl: './tipo-pago.component.html',
  styleUrls: ['./tipo-pago.component.css']
})
export class TipoPagoComponent implements OnInit {
  cita: Cita;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.cita = this.route.snapshot.params.cita;
  }
  generarCita(tipo){
    if(tipo == 'presencial'){
      //crear el metodo post 
      this.cita.tipoPago = 'presencial';
      console.log(this.cita);
    }
  }
}
