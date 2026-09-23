export class Producte {
    nom: string;
    preu: number;

    constructor(nom: string, preu: number) {
        this.nom = nom;
        this.preu = preu;
    }

    // metodo normal
    toString(): string {
        return `${this.nom} - ${this.preu}€`;
    }

    descripcion(): string {
        return `Nombre: ${this.nom} - Precio: ${this.preu}€`;
    }
    descuento(): number {
        return this.preu * 0.9; // Devuelve el precio con un 10% de descuento
    }
//getter
preuAmbIva(): number {
    return this.preu * 1.21;
}
}
