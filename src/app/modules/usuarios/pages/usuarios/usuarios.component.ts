import {Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

 public formusuario!:FormGroup;

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.buildForm();
  }
  private buildForm(){
    this.formusuario=this.formBuilder.group({
      usuario:['',Validators.required],
      contraseña:['',Validators.required], 
      id_trabajador:['',Validators.required],
      id:['',Validators.required],
      id_rol:['',Validators.required],
     
    });
  }
}
