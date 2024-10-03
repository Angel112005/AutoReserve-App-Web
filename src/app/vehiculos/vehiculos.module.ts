import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehiculoListComponent } from './vehiculo-list/vehiculo-list.component';
import { VehiculoFormComponent } from './vehiculo-form/vehiculo-form.component';



@NgModule({
  declarations: [
    VehiculoListComponent,
    VehiculoFormComponent
  ],
  imports: [
    CommonModule
  ]
})
export class VehiculosModule { }
