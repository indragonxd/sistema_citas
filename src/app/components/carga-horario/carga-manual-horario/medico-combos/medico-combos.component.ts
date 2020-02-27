import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-medico-combos',
  templateUrl: './medico-combos.component.html',
  styleUrls: ['./medico-combos.component.css']
})
export class MedicoCombosComponent implements OnInit {
  idMedico:string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.idMedico = this.route.snapshot.params.idMedico;
  }

}
