import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import {initFlowbite} from 'flowbite';
import { NavbarComponent } from "./navbar/navbar.component";
import { TempComponent} from './tem/temp/temp.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule,  NavbarComponent, TempComponent],
  templateUrl: './app.component.html',

  styleUrls: ['./app.component.css']

})

export class AppComponent {
  title = 'AngularSegundo03';
  ngOnInit(): void {
    initFlowbite();
  }
}
