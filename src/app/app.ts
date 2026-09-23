import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Producte } from './interfaces/producte';
import { Producte as ProducteClass } from './producte';// importamos la clase producto asignando una alias
import type { WoW } from './interfaces/modelos/WoW';
import { Juego } from './models/joc';
import { CestaJuegos } from './cistellaJocs';
import { Alumno } from './alumne';
import { saludar, esMajorEdat, sumarArray } from './funciones';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-entorns-2627');
  //DIFERENCIA ENTRE TS Y JS
  // LOS TIPOS NO CAMBIAN COMO FUNCIONA EL CODIGO, AYUDAN A DETECTAR ERRORES EN TIEMPO DE COMPILACION, NO EN TIEMPO DE EJECUCION
  // "undefined is not a function" ES LO QUE QUEREMOS EVITAR
  //function saluda(nom: string) {
    //return nom.toUpperCase();
//}
//saluda(50);

//TIPUS BASICS
nom: string = 'Angular';
nom2: string = 'Laravel';
versio: number = 20;
actiu: boolean = true;
//ARRAYS TIPATS
colors: string[] = ['vermell', 'verd', 'blau'];
frameworks: string[] = [this.nom = this.nom2];
punts : number[] = [10, 15, 20];

//Typescript interfiere el tipo automaticamente
ciutat = 'Lleida'; //string
codiP = 25605; //number

//objeto de tipo producto

producte: Producte = {
  id: 1,
  nom: 'PC',
  preu: 1000,
  disponible: true
}
producte2: Producte = {
  id: 2,
  nom: 'Ivan',
  preu: 5,
  disponible: false,
}

producte3: Producte = {
  id: 3,
  nom: 'Teclado',
  preu: 89.99,
  disponible: true,
}

productes: Producte[] = [this.producte, this.producte2];

p1 = new ProducteClass('Teclado', 89.99)

constructor() {
  console.log(this.p1.toString());
  console.log(this.p1.preuAmbIva());
  console.log(this.p1.toString());
  console.log(this.p1.descripcion());

  // RETO S02 - funciones implementadas
  console.log('saludar:', saludar('Marta'));
  console.log('esMajorEdat:', esMajorEdat(25));
  console.log('sumarArray:', sumarArray([2, 4, 6, 8]));

  const cesta = new CestaJuegos(4);
  this.juegos.forEach((juego) => cesta.agregarJuego(juego));

  console.log('Jocs actius:', this.getActius());
  console.log('Joc per id 2:', this.findById(2));
  console.log('Format joc:', this.formatarElement(this.juegos[0]));
  console.log('Total actius de la cistella:', cesta.totalActivos());
  console.log('Noms de la cistella:', cesta.nombresJuegos);
  console.log('Cistella plena:', cesta.estaLlena());

  const alumno1 = new Alumno('Ana', 18, 'DAW', [7, 8, 9, 6]);
  const alumno2 = new Alumno('Pau', 20, 'SMX', [5, 6, 4, 7]);

  console.log(alumno1.presentar());
  console.log('haAprobado Ana:', alumno1.haAprobado);
  console.log(alumno2.presentar());
  console.log('haAprobado Pau:', alumno2.haAprobado);
}

//1.Agregar un metodo de clase producto descripcion() que devuelva un string con nombre y precio

//2. Metodo descuento() que deuvuelva el precio con un 10% de rebajas

//3. crear un nuevo producto y mostrar el descuento por consola

//4. buscar la manera de mostrar el descuento en el popup



//WoW

arrayWoW: WoW[] = [
  { id: 1, nom: 'Pippyn', clase: 'Cazador', raza: 'Orco', nivel: 70, oro: 150, nivelMax: true },
  {id: 2, nom: 'Jokanero', clase: 'Picaro', raza: 'No-muerto', nivel: 70, oro: 200, nivelMax: true},
  {id: 3, nom: 'Calavera', clase: 'Mago', raza: 'Humano', nivel: 70, oro: 300, nivelMax: true},
  {id: 4, nom: 'Dunter', clase: 'Picaro', raza: 'enano', nivel : 60, oro: 50, nivelMax: false},
  {id: 5, nom: 'Hawnk', clase: 'Cazador', raza: 'Tauren', nivel: 70, oro: 100, nivelMax: true},
]

juegos: Juego[] = [
  {
    id: 1,
    nombre: 'The Legend of Zelda: Breath of the Wild',
    genero: 'Acción/Aventura',
    plataforma: 'Nintendo Switch',
    anyoLanzamiento: 2017,
    precio: 59.99,
    activo: true,
    valoracion: 10,
    descripcion: 'Juego de mundo abierto con exploración y enigmas.'
  },
  {
    id: 2,
    nombre: 'Cyberpunk 2077',
    genero: 'RPG',
    plataforma: 'PC',
    anyoLanzamiento: 2020,
    precio: 49.99,
    activo: true,
    valoracion: 8,
    descripcion: 'Mundo abierto futurista con decisiones importantes.'
  },
  {
    id: 3,
    nombre: 'Stardew Valley',
    genero: 'Simulación',
    plataforma: 'PC',
    anyoLanzamiento: 2016,
    precio: 14.99,
    activo: true,
    valoracion: 9,
    descripcion: 'Granja y vida rural con mucha relajación.'
  },
  {
    id: 4,
    nombre: 'Elden Ring',
    genero: 'Action RPG',
    plataforma: 'PlayStation 5',
    anyoLanzamiento: 2022,
    precio: 69.99,
    activo: false,
    valoracion: 9,
    descripcion: 'Juego de acción con mundos enormes y dificultad alta.'
  },
  {
    id: 5,
    nombre: 'Animal Crossing: New Horizons',
    genero: 'Simulación',
    plataforma: 'Nintendo Switch',
    anyoLanzamiento: 2020,
    precio: 39.99,
    activo: true,
    descripcion: 'Crea tu isla y vive el día a día.'
  }
];

get getactius() {
  return this.arrayWoW.filter((wow) => wow.nivelMax === true);
}

findById(id: number): WoW | Juego | undefined {
  return this.arrayWoW.find((wow) => wow.id === id) ?? this.juegos.find((juego) => juego.id === id);
}

getActius(): Juego[] {
  return this.juegos.filter((juego) => juego.activo === true);
}

formatarElement(element: WoW | Juego): string {
  if ('clase' in element) {
    return `Nombre: ${element.nom} - clase: ${element.clase} - raza: ${element.raza} - nivel: ${element.nivel} - oro: ${element.oro ?? 0} - nivelMax: ${element.nivelMax}`;
  }

  return `Nombre: ${element.nombre} - Género: ${element.genero} - Plataforma: ${element.plataforma} - Año: ${element.anyoLanzamiento} - Precio: ${element.precio}€ - Activo: ${element.activo}`;
}
}