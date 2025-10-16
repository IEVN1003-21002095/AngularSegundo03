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

  formulario: FormGroup = new FormGroup({
    x1: new FormControl(0),
    y1: new FormControl(0),
    x2: new FormControl(0),
    y2: new FormControl(0)
  });

  resultado: number = 0;

  distancia = new Distancia();

  calcularDistancia(): void {
    this.distancia.x1 = this.formulario.value.x1;
    this.distancia.y1 = this.formulario.value.y1;
    this.distancia.x2 = this.formulario.value.x2;
    this.distancia.y2 = this.formulario.value.y2;
    this.distancia.multNumeros();
    this.resultado = this.distancia.resultado;
  }

}
