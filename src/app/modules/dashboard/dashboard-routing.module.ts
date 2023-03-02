import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InventarioComponent } from '../inventario/pages/inventario/inventario.component';
import { TrabajadoresComponent } from '../trabajadores/pages/trabajadores/trabajadores.component';
import { UsuariosComponent } from '../usuarios/pages/usuarios/usuarios.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path:'', component:DashboardComponent, children:[
    {path:'home', component:HomeComponent},
    {path:'usuarios', component:UsuariosComponent},
    {path:'trabajadores', component:TrabajadoresComponent},
    {path:'inventario', component:InventarioComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
