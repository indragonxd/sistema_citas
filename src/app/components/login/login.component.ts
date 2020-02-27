import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isError = false;
  dni: string;
  password: string;
  usuario: Usuario;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }
  logeo() {
    console.log(this.password);
    this.authService.getLogin(this.dni, this.password).subscribe(data => {
      this.usuario = data;
      console.log(data);
      if (this.usuario) {
        console.log('entre');
        this.router.navigate(['/success',this.dni]);
      } else
        console.log("no hay usuarios");
    })
  }

}
