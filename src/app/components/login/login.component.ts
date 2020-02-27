import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

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
  form: FormGroup;
  private formSubmitAttempt: boolean;
  isLoggedIn$: Observable<boolean>;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.isLoggedIn$ = this.authService.isLoggedIn;
    this.authService.isLoggedIn.pipe(take(1)).subscribe(retorna => {
      console.log('vista del login: '+ retorna);
    });
    console.log("===============")
  }

  isFieldInvalid(field: string) { // {6}
    return (
      (!this.form.get(field).valid && this.form.get(field).touched) ||
      (this.form.get(field).untouched && this.formSubmitAttempt)
    );
  }

  async logeo() {
    await this.authService.getLogin('11223344', this.password).subscribe(data => {
      this.usuario = data;
      console.log(data);
      if (this.usuario) {
        console.log('Bienvenido');
        this.router.navigate(['/success',this.dni]);
      } else
        console.log("no hay usuarios");
    })
  }

}
