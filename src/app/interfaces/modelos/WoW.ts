export interface WoW {
  id: number;
  nom: string;
  clase: string;
  raza: string;
  nivel: number;
  oro?: number;
  nivelMax: boolean;
}

class listaWow {
  nom: string;
  personajes: WoW[];

  constructor(nom: string, personajes: WoW[]) {
    this.nom = nom;
    this.personajes = personajes;
  }
  agregarPersonaje(personaje: WoW): void {
    this.personajes.push(personaje);
  }
  encontrarPorId(id: number): WoW[] {
    return this.personajes.filter(personaje => personaje.id === id);
  }
  get activos(): WoW[] {
    return this.personajes.filter(personaje => personaje.nivelMax);
  }
}