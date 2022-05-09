import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingService {

  private linksTheme = document.querySelector('#theme');

  constructor() { 

    //cargando e theme guardado en el localstorage al recargar la pag.
    const url = localStorage.getItem('theme') || './assets/css/colors/purple-dark.css';

    // reemplazando el atributo href por el url. esto es vanilla javascript
    this.linksTheme!.setAttribute('href', url);
  }

  changeTheme(theme: string) {

    const url = `./assets/css/colors/${theme}.css`;

    // reemplazando el atributo href por el url. esto es vanilla javascript
    this.linksTheme!.setAttribute('href', url);

    //guardando los cambios en el localStorage
    localStorage.setItem('theme', url);

    this.checkCurrentTheme();
  }

  checkCurrentTheme() {
    const links = document.querySelectorAll('.selector');

    links.forEach( element => {
      //borrar clase working
      element.classList.remove('working');

      //URL DEL TEMA del boton ACTUAL
      const btnTheme = element.getAttribute('data-theme');
      //compararlo contra el url que esta almacenado en el linkTheme
      const btnThemeUrl = `./assets/css/colors/${btnTheme}.css`;
      // extraer el elemento del index.html
      const currenTheme = this.linksTheme!.getAttribute('href');

      // si currenTheme coincide con btnThemeUrlo entonces es el que le tenfo que poner la clase working
      if(btnThemeUrl === currenTheme) {
        element.classList.add('working');
      }
    });
  }
}
