import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventarioRoutingModule } from './inventario-routing.module';
import { InventarioComponent } from './pages/inventario/inventario.component';
import { SharedModule } from '../shared/shared.module';
import { TablainventarioComponent } from './pages/tablainventario/tablainventario.component';


@NgModule({
  declarations: [
    InventarioComponent,
    TablainventarioComponent
  ],
  imports: [
    CommonModule,
    InventarioRoutingModule,
    SharedModule
  ]
})
export class InventarioModule { }
