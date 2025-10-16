import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DistanciaComponent } from "./formularios/distancia/distancia.component";
import { ZodiacoComponent } from "./formularios/zodiaco/zodiaco.component";
import { CommonModule } from '@angular/common';
import  {AporBComponent} from './formularios/apor-b/apor-b.component';
import {initFlowbite} from 'flowbite';
import { NavbarComponent } from "./navbar/navbar.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DistanciaComponent, ZodiacoComponent, CommonModule, AporBComponent, NavbarComponent],
  templateUrl: './app.component.html',

  styleUrls: ['./app.component.css']

})

export class AppComponent {
  title = 'AngularSegundo03';
  ngOnInit(): void {
    initFlowbite();
  }
}
