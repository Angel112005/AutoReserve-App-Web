import { Injectable } from '@angular/core';
import { Cliente } from '../models/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private clientes: Cliente[] = []

  constructor() { }

 // Método para obtener todos los clientes
 getClientes(): Cliente[] {
  return this.clientes;
}

// Método para agregar un nuevo cliente
agregarCliente(cliente: Cliente): void {
  this.clientes.push(cliente);
}

// Método para eliminar un cliente por ID
eliminarCliente(id: number): void {
  this.clientes = this.clientes.filter(c => c.id !== id);
}

// Método para obtener un cliente por su ID
getClientePorId(id: number): Cliente | undefined {
  return this.clientes.find(c => c.id === id);
}

// Método para actualizar un cliente
actualizarCliente(cliente: Cliente): void {
  const index = this.clientes.findIndex(c => c.id === cliente.id);
  if (index !== -1) {
    this.clientes[index] = cliente;  // Reemplaza el cliente existente
  }
}

}
