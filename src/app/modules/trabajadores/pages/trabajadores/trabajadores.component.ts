import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-trabajadores',
  templateUrl: './trabajadores.component.html',
  styleUrls: ['./trabajadores.component.css']
})
export class TrabajadoresComponent implements OnInit {
  public formtrabajador!:FormGroup;

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.buildForm();
  }
  private buildForm(){
    this.formtrabajador=this.formBuilder.group({
      id:['',Validators.required],
      id_area:['',Validators.required], 
      numero_trabajador:['',Validators.required],
      nombre:['',Validators.required],
      apellidos:['',Validators.required]
  
      
     
    });
  }

}
