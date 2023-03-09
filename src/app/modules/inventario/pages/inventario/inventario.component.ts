import { Component, OnInit, Inject } from '@angular/core';

import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { TablainventarioComponent } from '../tablainventario/tablainventario.component';

export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}


@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})
export class InventarioComponent implements OnInit {

  public forminventario!:FormGroup;

  constructor(private formBuilder:FormBuilder,public dialog: MatDialog) { }

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


  openDialog() {
    this.dialog.open(TablainventarioComponent, {
      data: {
        animal: 'panda',
      },
    });
  }

  

}
