import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})
export class InventarioComponent implements OnInit {

  public forminventario!:FormGroup;

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.buildForm();
  }
  private buildForm(){
    this.forminventario=this.formBuilder.group({
      id:['',Validators.required],
      numero_serie:['',Validators.required], 
      marca:['',Validators.required],
      color:['',Validators.required],
      observaciones:['',Validators.required],
      numero_etiqueta:['',Validators.required], 
      tipo:['',Validators.required],
      descripcion:['',Validators.required],
      
     
    });
  }

  

}
