import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

// import { AppRoutingModule } from './app-routing.module';
// import { ClienteFormComponent } from './clientes/cliente-form/cliente-form.component';
// import { FormsModule } from '@angular/forms';
// import { ClienteListComponent } from './clientes/cliente-list/cliente-list.component';
// import { ClientesSectionComponent } from './clientes/clientes-section/clientes-section.component';
import { ClientesModule } from './clientes/clientes.module';
import { VehiculosModule } from './vehiculos/vehiculos.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ClientesModule,
    VehiculosModule
    // AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
