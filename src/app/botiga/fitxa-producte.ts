import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import type { ProducteLab } from '../bindings/producte-tab';

@Component({
  selector: 'app-fitxa-producte',
  templateUrl: './fitxa-producte.html',
  styleUrl: './fitxa-producte.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FitxaProducteComponent {
  @Input({ required: true }) producte!: ProducteLab;
  @Input() set jaAfegit(value: boolean) {
    this.afegitAlCarret = value;
  }
  @Output() readonly producteAfegit = new EventEmitter<ProducteLab>();

  afegitAlCarret = false;

  get teEstoc(): boolean {
    return this.producte.estoc > 0;
  }

  get classesFitxa(): string {
    return this.teEstoc ? 'fitxa' : 'fitxa fitxa-esgotada';
  }

  afegir(): void {
    if (this.teEstoc && !this.afegitAlCarret) {
      this.afegitAlCarret = true;
      this.producteAfegit.emit(this.producte);
    }
  }
}
