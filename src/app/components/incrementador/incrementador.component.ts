import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit{


  ngOnInit() {
    this.btnClass = `btn ${this.btnClass}`;
  }

  //enviar el valor al componente progress
  @Input('valor') progreso: number = 50;
  @Input() btnClass: string = 'btn-primary';

  //para escuchar los cambios del valor en el component progress
  @Output() valorSalida: EventEmitter<number> = new EventEmitter();

  cambiarValor(valor: number): number {

    if ( this.progreso >= 100 && valor >= 0 ) {
      this.valorSalida.emit(100);
      this.progreso = 100;
    }

    if ( this.progreso <= 0 && valor < 0 ) {
      this.valorSalida.emit(0);
      this.progreso = 0;
    }
    
    this.valorSalida.emit(this.progreso);
    return this.progreso = this.progreso + valor;
    
    
  }

  onChange(nuevoValor: number) {
    if(nuevoValor >= 100) {
      this.progreso = 100;
    } else if(nuevoValor <= 0){
      this.progreso = 0;
    } else {
      this.progreso = nuevoValor;
    }
    this.valorSalida.emit(this.progreso);
  }

}
