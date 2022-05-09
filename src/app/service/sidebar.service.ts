import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  //cambiar opciones del menú
  public menu: any[] = [
    {
      title: 'Dashboard!!!',
      icon: 'mdi mdi-gauge',
      submenu: [
        {title: 'Main', url: '/'},
        {title: 'ProgressBar', url: 'progress'},
        {title: 'Gráficas', url: 'grafica1'}
      ]
    }
  ];
  
  constructor() { }
}