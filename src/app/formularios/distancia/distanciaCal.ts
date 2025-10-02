import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
export class Distancia {
  formulario: FormGroup = new FormGroup({
    x1: new FormControl(0),
    y1: new FormControl(0),
    x2: new FormControl(0),
    y2: new FormControl(0)
  });
  resultado: number = 0;

  multNumeros(): void {
    const x1 = this.formulario.get('x1')?.value;
    const y1 = this.formulario.get('y1')?.value;
    const x2 = this.formulario.get('x2')?.value;
    const y2 = this.formulario.get('y2')?.value;
    this.resultado = Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
  }
}
