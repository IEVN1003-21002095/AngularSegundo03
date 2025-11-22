import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlumnosFilterPipe } from '../alumnos-filter.pipe';
import { ProyectoapiService } from '../proyectoapi.service';
import { AlumnosUtl } from '../alumnos';

@Component({
  selector: 'app-alumnos',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule, AlumnosFilterPipe],
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {
  imageWidth = 50;
  imageMargin = 2;
  muestraImagen = false;
  listFilter = '';
  alumnosTitle!:string;
  datoSource: AlumnosUtl[] = [];

  constructor(public alumnosUtl: ProyectoapiService) {}
  alumnosIric: AlumnosUtl[] = [
    {
      matricula: 20123456,
      nombre: 'Juan',
      apaterno: 'Pérez',
      amaterno: 'Gómez',
      correo: 'juan.perez@example.com'
    }
  ];
 ngOnInit(): void {
  this.alumnosUtl.getAlumnos().subscribe({
    next: (response: any) => {
      this.datoSource = response.alumnos;
    },
    error: (error) => console.error(error)
  });


  }
}
