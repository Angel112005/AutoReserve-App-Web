import { Component, Output, EventEmitter } from '@angular/core';
import { ClienteService } from '../services/cliente.service';
import { Cliente } from '../models/cliente';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrl: './cliente-list.component.css'
})
export class ClienteListComponent {

  clientes: Cliente[] = [];

  @Output() editarCliente: EventEmitter<Cliente> = new EventEmitter();  // Emitir evento cuando se edite un cliente

  constructor(private clienteService: ClienteService) {}

  ngOnInit(): void {
    this.clientes = this.clienteService.getClientes();  // Cargar la lista de clientes al iniciar
  }

  eliminarCliente(id: number): void {
    this.clienteService.eliminarCliente(id);  // Eliminar cliente
    this.clientes = this.clienteService.getClientes();  // Actualizar lista
  }

  seleccionarCliente(cliente: Cliente): void {
    this.editarCliente.emit(cliente);  // Emitir el cliente seleccionado para editar
  }

}
