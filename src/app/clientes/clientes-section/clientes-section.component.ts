import { Component } from '@angular/core';
import { Cliente } from '../models/cliente';

@Component({
  selector: 'app-clientes-section',
  templateUrl: './clientes-section.component.html',
  styleUrl: './clientes-section.component.css'
})
export class ClientesSectionComponent {

  clienteSeleccionado: Cliente = {
    id: 0,
    nombre: '',
    apellido: '',
    correo: '',
    telefono: '',
    direccion: '',
    licencia: ''
  };

  // Método que se llama cuando se selecciona un cliente para editar
  editarCliente(cliente: Cliente): void {
    this.clienteSeleccionado = { ...cliente };  // Copiar los datos del cliente seleccionado
  }

  // Método que se llama cuando se guarda un cliente
  clienteGuardado(): void {
    this.clienteSeleccionado = {
      id: 0,
      nombre: '',
      apellido: '',
      correo: '',
      telefono: '',
      direccion: '',
      licencia: ''
    };
  }

}
