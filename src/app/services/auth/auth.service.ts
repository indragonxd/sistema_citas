import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedIn = new BehaviorSubject<boolean>(true);

  constructor(private http: HttpClient, private router: Router) { }

  get isLoggedIn() {
    return this.loggedIn.asObservable(); // {2}
  }

  getLogin(dni: string, password: string) {
    this.loggedIn.next(false);
    return this.http.get<Usuario>('http://localhost:8080/clinica/login/' + dni + '/' + password);
  }
  getUser(dni:string){
    return this.http.get<Usuario>('http://localhost:8080/clinica/usuarios/' + dni);
  }
}
