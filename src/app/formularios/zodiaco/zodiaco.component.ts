import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ZodiacoCal } from './zodiaco';

@Component({
  selector: 'app-zodiaco',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './zodiaco.component.html',
  styleUrls: ['./zodiaco.component.css']
})
export class ZodiacoComponent {


  form: FormGroup = new FormGroup({
    nombre: new FormControl(''),
    apaterno: new FormControl(''),
    amaterno: new FormControl(''),
    dia: new FormControl(0),
    mes: new FormControl(0),
    anio: new FormControl(0),
    sexo: new FormControl('')
  });

 zodiaco = new ZodiacoCal();

 calcularZodiaco(): void {
    this.zodiaco.nombre = this.form.value.nombre;
    this.zodiaco.apaterno = this.form.value.apaterno;
    this.zodiaco.amaterno = this.form.value.amaterno;
    this.zodiaco.dia = this.form.value.dia;
    this.zodiaco.mes = this.form.value.mes;
    this.zodiaco.anio = this.form.value.anio;
    this.zodiaco.sexo = this.form.value.sexo;

    this.zodiaco.calcularEdad();
    this.zodiaco.obtenerSignoChino();
    this.zodiaco.obtenerImagenSignoChino();
  }


}
