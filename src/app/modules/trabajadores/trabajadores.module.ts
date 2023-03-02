import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrabajadoresRoutingModule } from './trabajadores-routing.module';
import { TrabajadoresComponent } from './pages/trabajadores/trabajadores.component';


@NgModule({
  declarations: [
    TrabajadoresComponent
  ],
  imports: [
    CommonModule,
    TrabajadoresRoutingModule
  ]
})
export class TrabajadoresModule { }
