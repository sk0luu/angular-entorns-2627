export class Alumno {
  nombre: string;
  edad: number;
  ciclo: string;
  notas: number[];

  constructor(nombre: string, edad: number, ciclo: string, notas: number[]) {
    this.nombre = nombre;
    this.edad = edad;
    this.ciclo = ciclo;
    this.notas = notas;
  }

  presentar(): string {
    return `Soy ${this.nombre}, tengo ${this.edad} años y estudio ${this.ciclo}`;
  }

  get mediaNotas(): number {
    if (this.notas.length === 0) {
      return 0;
    }

    const total = this.notas.reduce((acumulador, nota) => acumulador + nota, 0);
    return total / this.notas.length;
  }

  get haAprobado(): boolean {
    return this.mediaNotas >= 5;
  }
}
