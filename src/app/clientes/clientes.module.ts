import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ClienteListComponent } from './cliente-list/cliente-list.component';
import { ClienteFormComponent } from './cliente-form/cliente-form.component';
import { ClientesSectionComponent } from './clientes-section/clientes-section.component';
// import { ReactiveFormsModule } from '@angular/forms';
// import { ClientesRoutingModule } from './clientes-routing.module';  // Importa las rutas



@NgModule({
  declarations: [
    ClienteListComponent,
    ClienteFormComponent,
    ClientesSectionComponent
  ],
  imports: [
    CommonModule,
    FormsModule
    // ReactiveFormsModule,
    // ClientesRoutingModule
  ],
  exports: [
    ClientesSectionComponent
  ]
})
export class ClientesModule { }
