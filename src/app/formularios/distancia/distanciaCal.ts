import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


export class Distancia {
  x1: number = 0;
  y1: number = 0;
  x2: number = 0;
  y2: number = 0;
  resultado: number = 0;

  multNumeros(): void {
    this.resultado = Math.sqrt((this.x2 - this.x1) * (this.x2 - this.x1) + (this.y2 - this.y1) * (this.y2 - this.y1));
  }
}
