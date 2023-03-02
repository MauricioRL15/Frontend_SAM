import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit{
  form: FormGroup;
  loading = false;

  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar, private router: Router) {
    this.form = this.fb.group({
      usuario: ['', Validators.required],
      password: ['', Validators.required],
    })
   }

  ngOnInit(): void {
  }

  hide = true;

  ingresar(){
    const usuario = this.form.value.usuario;
    const password = this.form.value.password;
    console.log(usuario);
    console.log(password);
    if(usuario == 'admin' && password == '1234'){
      //Lo mandamos al dashboard
      this.router.navigate(['dashboard']);
    }else{
      //mensaje de error
      this.error();
    }
  }

error(){
  this._snackBar.open('Usuario o contraseña invalidos', '', {
    duration:5000, horizontalPosition: 'center', verticalPosition: 'bottom'
  });
}
  

}
