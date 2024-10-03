import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservaListComponent } from './reserva-list/reserva-list.component';
import { ReservaFormComponent } from './reserva-form/reserva-form.component';



@NgModule({
  declarations: [
    ReservaListComponent,
    ReservaFormComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ReservasModule { }
