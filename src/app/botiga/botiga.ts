import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PRODUCTES_LAB, type ProducteLab } from '../bindings/producte-tab';
import { FitxaProducteComponent } from './fitxa-producte';

@Component({
  selector: 'app-botiga',
  imports: [FitxaProducteComponent],
  templateUrl: './botiga.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  
})
export class Botiga {
  protected readonly title = 'Botiga';
  protected readonly productes = PRODUCTES_LAB;
  protected readonly carret: number[] = [];
  

  protected teEstoc(producte: ProducteLab): boolean {
    return producte.estoc > 0;
  }

  protected classesFitxa(producte: ProducteLab): string {
    return producte.estoc > 0 ? 'fitxa' : 'fitxa fitxa-esgotada';
  }
  imatgeSegura(p: ProducteLab) : string {
    return p.imatgeUrl || 'SENSE IMATGE'
  }
  urlFitxa(p: ProducteLab) : string{
    return `https://botiga.cat/producte/${p.id}`;
  }
  
  afegir(p: ProducteLab) : void {
    if(this.teEstoc(p) && !this.carret.includes(p.id)){
      this.carret.push(p.id);
    } 
  }
}