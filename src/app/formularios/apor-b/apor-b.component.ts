import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AporB } from './aporb';

@Component({
  selector: 'app-apor-b',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './apor-b.component.html',
  styleUrls: ['./apor-b.component.css']
})
export class AporBComponent {
  formulario: FormGroup = new FormGroup({
    a: new FormControl(0),
    b: new FormControl(0)
  });

  AporB = new AporB();
  resultado: number = 0;

  calcularMultiplicacion(): void {
    this.AporB.a = this.formulario.value.a;
    this.AporB.b = this.formulario.value.b;
    this.AporB.calcularMultiplicacion();
    this.resultado = this.AporB.resultado;
  }
}
