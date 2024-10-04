export interface Reserva {
  id: number;
  clienteId: number;
  vehiculoId: number;
  fechaInicio: Date;
  fechaFin: Date;
  estado: string;
}
