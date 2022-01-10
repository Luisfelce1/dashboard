import { Component } from '@angular/core';

interface MenuItem {
  texto: string;
  ruta: string;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [`
    li{
      cursor: pointer;
    }
  `
  ]
})
export class SidebarComponent  {

  templateMenu: MenuItem[] = [
    {
      texto: 'Dashboard',
      ruta: ''
    },
    {
      texto: 'Grafica1',
      ruta: 'grafica1'
    },
    {
      texto: 'Progress',
      ruta: 'progress'
    },
  ]
}
