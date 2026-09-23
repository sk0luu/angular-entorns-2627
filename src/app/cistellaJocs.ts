import { Juego } from './models/joc';

export class CestaJuegos {
  private _juegos: Juego[];
  capacidad: number;

  constructor(capacidad: number, juegos: Juego[] = []) {
    this.capacidad = capacidad;
    this._juegos = juegos.slice(0, capacidad);
  }

  agregarJuego(juego: Juego): boolean {
    if (this._juegos.length >= this.capacidad) {
      return false;
    }

    this._juegos.push(juego);
    return true;
  }

  eliminarJuegoPorId(id: number): Juego | undefined {
    const index = this._juegos.findIndex((juego) => juego.id === id);

    if (index === -1) {
      return undefined;
    }

    return this._juegos.splice(index, 1)[0];
  }

  buscarJuegoPorId(id: number): Juego | undefined {
    return this._juegos.find((juego) => juego.id === id);
  }

  totalActivos(): number {
    return this._juegos.filter((juego) => juego.activo).length;
  }

  sumaPrecios(): number {
    return this._juegos.reduce((total, juego) => total + juego.precio, 0);
  }

  get nombresJuegos(): string[] {
    return this._juegos.map((juego) => juego.nombre);
  }

  estaLlena(): boolean {
    return this._juegos.length >= this.capacidad;
  }
}
