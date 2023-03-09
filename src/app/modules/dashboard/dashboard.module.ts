import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HeaderComponent } from './pages/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { SidenavComponent } from './pages/sidenav/sidenav.component';
import { SharedModule } from '../shared/shared.module';
import { InventarioModule } from '../inventario/inventario.module';
import { TrabajadoresModule } from '../trabajadores/trabajadores.module';
import { UsuariosModule } from '../usuarios/usuarios.module';



@NgModule({
  declarations: [
    DashboardComponent,
    HeaderComponent,
    HomeComponent,
    SidenavComponent,
    
  
    

    
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    InventarioModule,
    TrabajadoresModule,
    UsuariosModule

  ]
})
export class DashboardModule { }
