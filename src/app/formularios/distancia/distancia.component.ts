import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControlState, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-distancia',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './distancia.component.html',
  styleUrl: './distancia.component.css'
})
export class DistanciaComponent {
  formulario!:FormGroup;
  resultado!:number;
  constructor(){}
  ngOnInit():void{
    this.formulario=new FormGroup({
      x1:new FormControl(''),
      y1:new FormControl(''),
      x2:new FormControl(''),
      y2:new FormControl(''),
    });
  }
  multNumeros():void{
    const x1=this.formulario.get('x1')?.value;
    const y1=this.formulario.get('y1')?.value;
    const x2=this.formulario.get('x2')?.value;
    const y2=this.formulario.get('y2')?.value;
    this.resultado=Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  }

}
