import { Injectable } from '@angular/core';
import { Vehiculo } from '../models/vehiculo';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {

  private vehiculos: Vehiculo[] = [];

  constructor() { }

  getVehiculos(): Vehiculo[]{
    return this.vehiculos;
  }

  agregarVehiculo(vehiculo: Vehiculo): void{
    this.vehiculos.push(vehiculo);
  }

  eliminarVehiculo(id: number): void {
    this.vehiculos = this.vehiculos.filter(v => v.id !== id);
  }

  actualizarVehiculo(vehiculo: Vehiculo): void{
    const index = this.vehiculos.findIndex(coche => coche.id === vehiculo.id);
    if(index !== -1){
      this.vehiculos[index] = vehiculo;
    }
  }

  getVehiculoPorId(id: number): Vehiculo | undefined {
    return this.vehiculos.find(coche => coche.id === id);
  }

}
