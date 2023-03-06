import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrabajadoresRoutingModule } from './trabajadores-routing.module';
import { TrabajadoresComponent } from './pages/trabajadores/trabajadores.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    TrabajadoresComponent
  ],
  imports: [
    CommonModule,
    TrabajadoresRoutingModule,
    SharedModule
  ]
})
export class TrabajadoresModule { }
