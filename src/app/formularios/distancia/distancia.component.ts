import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControlState, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormControl, FormGroup } from '@angular/forms';
import { Distancia } from './distanciaCal';

@Component({
  selector: 'app-distancia',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './distancia.component.html',
  styleUrl: './distancia.component.css'
})
export class DistanciaComponent {
  distancia = new Distancia();

  calcularDistancia( ): void {
    this.distancia.multNumeros();
    console.log(this.distancia.resultado);
  }

}
