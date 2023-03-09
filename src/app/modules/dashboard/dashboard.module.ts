import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HeaderComponent } from './pages/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { SidenavComponent } from './pages/sidenav/sidenav.component';
import { SharedModule } from '../shared/shared.module';
import { InventarioComponent } from '../inventario/pages/inventario/inventario.component';
import { TrabajadoresComponent } from '../trabajadores/pages/trabajadores/trabajadores.component';
import { UsuariosComponent } from '../usuarios/pages/usuarios/usuarios.component';



@NgModule({
  declarations: [
    DashboardComponent,
    HeaderComponent,
    HomeComponent,
    SidenavComponent,
    InventarioComponent,
    TrabajadoresComponent,
    UsuariosComponent,

    
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
