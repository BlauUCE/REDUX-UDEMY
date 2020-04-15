import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styles: []
})
export class HijoComponent implements OnInit {

  @Input() contadorh: number;
  @Output() cambioContador = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }
  
  multiplicar2() {
    this.contadorh *= 2;
    this.cambioContador.emit(this.contadorh);
  }

  dividir2() {
    this.contadorh /= 2;
    this.cambioContador.emit(this.contadorh);
  }
  
  resetNieto(evento) {
    this.contadorh = 0;
    this.cambioContador.emit(this.contadorh);
  }
}
