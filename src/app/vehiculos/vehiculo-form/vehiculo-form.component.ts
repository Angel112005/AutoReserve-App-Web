import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Vehiculo } from '../models/vehiculo';
import { VehiculoService } from '../services/vehiculo.service';

@Component({
  selector: 'app-vehiculo-form',
  templateUrl: './vehiculo-form.component.html',
  styleUrl: './vehiculo-form.component.css'
})
export class VehiculoFormComponent {
  @Input() vehiculo: Vehiculo = {
    id: 0,
    marca: '',
    modelo: '',
    generacion: 0,
    matricula: '',
    tipo: '',
    estado: ''
  };

  @Output() vehiculoGuardado: EventEmitter<void> = new EventEmitter();

  constructor(private vehiculoService: VehiculoService) {}

  guardarVehiculo(): void {
    if (this.vehiculo.id) {
      this.vehiculoService.actualizarVehiculo(this.vehiculo);
    } else {
      this.vehiculo.id = Date.now();
      this.vehiculoService.agregarVehiculo(this.vehiculo);
    }

    this.vehiculoGuardado.emit();
    this.resetForm();
  }

  resetForm(): void {
    this.vehiculo = {
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
