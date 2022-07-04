import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PenggunaComponent } from './pengguna/pengguna.component';
import { PerusahaanComponent } from './perusahaan/perusahaan.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'pengguna',
        component: PenggunaComponent,
      },
      {
        path: 'perusahaan',
        component: PerusahaanComponent,
      },
      {
        path:'',
        redirectTo: '/admin/dashboard',
        pathMatch: 'full',
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
