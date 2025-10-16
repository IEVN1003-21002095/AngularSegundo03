import { Routes } from "@angular/router";

export default [
  {
    path: 'apor-b',
    loadComponent: () => import('./apor-b/apor-b.component').then(c => c.AporBComponent)
  },
  {
    path: 'distancia',
    loadComponent: () => import('./distancia/distancia.component').then(c => c.DistanciaComponent)
  },
  {
    path: 'zodiaco',
    loadComponent: () => import('./zodiaco/zodiaco.component').then(c => c.ZodiacoComponent)
  }
] as Routes;
