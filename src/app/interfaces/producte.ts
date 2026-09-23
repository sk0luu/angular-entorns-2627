//Una interfaz define la estructura de un objeto
//cualquier objeto de tipo Producte tiene que tener estos campos
export interface Producte {
  id: number;
  nom: string;
  preu: number;
  disponible: boolean;
  descripcio?: string; //campo opcional
}

