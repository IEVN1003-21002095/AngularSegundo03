import { Routes } from "@angular/router";

export default [
  {
    path: 'listaalumnos',
    loadComponent: () => import('./alumnos/alumnos.component').then(c => c.AlumnosComponent)
  },
  {
    path: 'agregar',
    loadComponent: () => import('./agregar/agregar.component')
  },
  {
    path: 'editar/:id',
    loadComponent: () => import('./editar/editar.component').then(m => m.default)
      },
  {
    path: 'eliminar/:matricula',
    loadComponent: () => import('./eliminar/eliminar.component').then(c => c.default)
  },

] as Routes;
