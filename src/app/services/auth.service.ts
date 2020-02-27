import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  getLogin(dni: string, password: string) {
    return this.http.get<Usuario>('http://localhost:8080/clinica/login/' + dni + '/' + password);
  }
  getUser(dni:string){
    return this.http.get<Usuario>('http://localhost:8080/clinica/login/' + dni);
  }

}
