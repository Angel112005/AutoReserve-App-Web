import { Component } from '@angular/core';
import { Vehiculo } from '../models/vehiculo';

@Component({
  selector: 'app-vehiculos-section',
  templateUrl: './vehiculos-section.component.html',
  styleUrl: './vehiculos-section.component.css'
})
export class VehiculosSectionComponent {
  vehiculoSeleccionado: Vehiculo = {  // Vehículo que se va a editar o agregar
    id: 0,
    marca: '',
    modelo: '',
    generacion: new Date().getFullYear(),
    matricula: '',
    tipo: '',
    estado: ''
  };

  // Método para seleccionar un vehículo para editar
  editarVehiculo(vehiculo: Vehiculo): void {
    this.vehiculoSeleccionado = { ...vehiculo };  // Copia los datos del vehículo seleccionado
  }

  vehiculoGuardado(): void {
    this.vehiculoSeleccionado = {
      id: 0,
      marca: '',
      modelo: '',
      generacion: 0,
      matricula: '',
      tipo: '',
      estado: ''
    };
  }
}
