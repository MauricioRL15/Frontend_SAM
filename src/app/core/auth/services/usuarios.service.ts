import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {


  // http://localhost:3000/usuarios
  constructor(private http: HttpClient) { }
}
