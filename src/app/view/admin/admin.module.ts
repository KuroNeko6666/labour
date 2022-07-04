import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PenggunaComponent } from './pengguna/pengguna.component';
import { PerusahaanComponent } from './perusahaan/perusahaan.component';
import { AdminRoutingModule } from './admin-routing.module';
import { MaterialDesign } from 'src/app/material/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DashboardComponent,
    PenggunaComponent,
    PerusahaanComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialDesign,
    FlexLayoutModule,
    ReactiveFormsModule,
  ]
})
export class AdminModule { }
