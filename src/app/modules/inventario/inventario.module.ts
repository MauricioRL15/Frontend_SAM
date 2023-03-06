import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventarioRoutingModule } from './inventario-routing.module';
import { InventarioComponent } from './pages/inventario/inventario.component';


@NgModule({
  declarations: [
    InventarioComponent
  ],
  imports: [
    CommonModule,
    InventarioRoutingModule,
    SharedModule
  ]
})
export class InventarioModule { }
