/*Este fichero contiene la logica: propiedades, metodos...*/
import { Component } from '@angular/core';
import { Producte } from '../interfaces/producte';
import { Producte2 } from '../interfaces/producte2';
@Component({
  selector: 'app-tarjeta', /*es para usarlo para el HTML de otros componente, como una etiqueta HTML personalizada*/
  imports: [],
  templateUrl: './tarjeta.html',
  styleUrl: './tarjeta.css',
})
export class Tarjeta {
  nom: string = 'Ordenador Gamer Pro';
  preu: number = 12.99;
  estoc: number = 5;

  producto: Producte = {
    id: 1,
    nom: 'Castanya',
    preu: 12.99,
    estoc: 5,
    categoria: 'Informática',
    disponible: true
  };

  producteXif: Producte2 = {
    id: 1,
    nom: 'Castanya',
    preu: 12.99,
    estoc: 10,
    categoria: 'Alimentación',
    disponible: true,
    descripcio: 'Castanya de la temporada'
  };

  mostrarDesc = false;

  toggleDesc(): void {
    this.mostrarDesc = !this.mostrarDesc;
  }

  /*
    Getter1
  */
  get preuAmbIVA(): number {
    return this.producto.preu * 1.21;
  }

  /*getter2*/
  get estadoDisponibilidad(): string {
    if (this.producto.estoc === 0) return 'Agotado';
    if (this.producto.estoc < 3) return 'Ultimas unidades';
    return 'Disponible';
  }
}

/* Getter --> Es un tipo especial de propiedad calculada. En lugar de guardar un valor, lo calcula cada vez que se accede.

get nomDelGetter(); TipoRetorno {
  return calculo;
}

*/
/*INTERPOLACION DE DATOS 
permite conectas dlos datos del TS a HTML
permite incrustar expresiones TS dentro de HTML, angular evalua la expresión y muestra el resultado como texto

{{nomPropiedad}} --> muestra el valor de una propiedad de la clase
{{2+3}} --> mostra 5
{{text.toUpeerCase()}} --> mostrar el texto en mayusculas
{{edad >= 18 ? 'Mayor de 'edad' : ' Menos de 'edad' --> operador terniario}}
con {{nom}} --> el valor cambia y el html se actualiza automaticamente, harcodrado es por siempre estatico*/

/*
AGEFIR ETIQUETA OFERTA I GRATUÏT 
si el preu es inferior a 20 --> oferta
si el preu es 0 --> gratuït
si el preu es superior a 100 --> premium
*/

/*
if dins d'un for per marcar productes especials
si la categoria es informàtica --> div amb "destacat"
podeu posar estils i si voleu emojis estrella...
*/