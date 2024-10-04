import { Component, Input, Output, EventEmitter} from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClienteService } from '../services/cliente.service';
import { Cliente } from '../models/cliente';
// import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrl: './cliente-form.component.css'
})
export class ClienteFormComponent {

  @Input() cliente: Cliente = {
    id: 0,
    nombre: '',
    apellido: '',
    correo: '',
    telefono: '',
    direccion: '',
    licencia: ''
  };

  @Output() clienteGuardado: EventEmitter<void> = new EventEmitter();  // Emitir evento cuando se guarde

  editMode: boolean = false;

  constructor(private clienteService: ClienteService) {}

  guardarCliente(): void {
    if (this.cliente.id) {
      // Si tiene un ID, estamos editando
      this.clienteService.actualizarCliente(this.cliente);
    } else {
      // Si no tiene ID, es un nuevo cliente
      this.cliente.id = Date.now();
      this.clienteService.agregarCliente(this.cliente);
    }

    this.clienteGuardado.emit();  // Notificamos que se guardó el cliente
    this.resetForm();
  }

  resetForm(): void {
    this.cliente = {
      id: 0,
      nombre: '',
      apellido: '',
      correo: '',
      telefono: '',
      direccion: '',
      licencia: ''
    };
    this.editMode = false;
  }

}
