import { Component, Output, EventEmitter } from '@angular/core';
import { VehiculoService } from '../services/vehiculo.service';
import { Vehiculo } from '../models/vehiculo';

@Component({
  selector: 'app-vehiculo-list',
  templateUrl: './vehiculo-list.component.html',
  styleUrl: './vehiculo-list.component.css'
})
export class VehiculoListComponent {

  vehiculos: Vehiculo[] = [];

  @Output() editarVehiculo: EventEmitter<Vehiculo> = new EventEmitter();

  constructor(private vehiculoService: VehiculoService) {}

  ngOnInit(): void {
    this.vehiculos = this.vehiculoService.getVehiculos();
  }

  eliminarVehiculo(id: number): void {
    this.vehiculoService.eliminarVehiculo(id);
    this.vehiculos = this.vehiculoService.getVehiculos();
  }

  seleccionarVehiculo(vehiculo: Vehiculo): void {
    this.editarVehiculo.emit(vehiculo);
  }

}
