import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Producte } from './interfaces/producte';
import { Producte as ProducteClass } from './producte';// importamos la clase producto asignando una alias
import type { WoW } from './interfaces/modelos/WoW';
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

get getactius() {
  return this.arrayWoW.filter((wow) => wow.nivelMax === true);
}

findById(id: number) {
  return this.arrayWoW.find((wow) => wow.id === id);
}

formatarElement(element: WoW) {
  return `Nombre: ${element.nom} - clase: ${element.clase} - raza: ${element.raza} - nivel: ${element.nivel} - oro: ${element.oro ?? 0} - nivelMax: ${element.nivelMax}`;
}
}