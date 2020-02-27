import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  dni:string
  usuario:Usuario;
  constructor(private route: ActivatedRoute, private authService:AuthService) { }

  ngOnInit() {
    this.dni = this.route.snapshot.params.dni;
    //this.usuario = authService
  }

}
