import { Component } from '@angular/core';
import { Cliente } from './clientes/models/cliente';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'autoReserve_App';

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
