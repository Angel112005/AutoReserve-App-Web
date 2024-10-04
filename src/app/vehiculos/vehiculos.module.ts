import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { VehiculoListComponent } from './vehiculo-list/vehiculo-list.component';
import { VehiculoFormComponent } from './vehiculo-form/vehiculo-form.component';
import { VehiculosSectionComponent } from './vehiculos-section/vehiculos-section.component';



@NgModule({
  declarations: [
    VehiculoListComponent,
    VehiculoFormComponent,
    VehiculosSectionComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
   VehiculosSectionComponent
  ]
})
export class VehiculosModule { }
