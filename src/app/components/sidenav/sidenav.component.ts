import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  dni: string
  usuario: Usuario;
  isLoggedIn$: Observable<boolean>;
  verificado = false;
  mostrar: boolean;

  constructor(private route: ActivatedRoute, private authService: AuthService) { }

  ngOnInit() {
    this.isLoggedIn$ = this.authService.isLoggedIn; 
    this.authService.isLoggedIn.subscribe(band =>{
      this.mostrar = !band;
      console.log('vista del sidenav: '+ this.mostrar);
    })
    console.log("===============")
    //if (this.mostrar == true){
      console.log('verifica o no: '+this.mostrar);
      this.verificar();
    //}
  }

  async verificar() {
    this.dni = this.route.snapshot.params.dni;
    await this.authService.getUser('11223344').subscribe(data => {
      this.usuario = data;
    })
  }

}
