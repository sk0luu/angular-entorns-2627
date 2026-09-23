export interface Juego {
  id: number;
  nombre: string;
  genero: string;
  plataforma: string;
  anyoLanzamiento: number;
  precio: number;
  activo: boolean;
  valoracion?: number;
  descripcion?: string;
}
