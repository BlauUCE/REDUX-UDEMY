//import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { MultiplicarAction, DividirAction } from '../contador.actions';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styles: []
})
export class HijoComponent implements OnInit {

  //@Input() contadorh: number;
  contadorh: number;
  //@Output() cambioContador = new EventEmitter<number>();

  constructor( private store:Store<AppState>) { }

  ngOnInit() {
    this.store.select('contador').subscribe(cont => {
      this.contadorh = cont;
      console.log(cont);
    });
  }
  
  multiplicar2() {
    const accion = new MultiplicarAction(5);
    this.store.dispatch(accion);  
    //this.contadorh *= 2;
    //this.cambioContador.emit(this.contadorh);
  }

  dividir2() {
    const accion = new DividirAction(5);
    this.store.dispatch(accion);
    //this.contadorh /= 2;
    //this.cambioContador.emit(this.contadorh);
  }
  
  //ya no es necesario
  resetNieto(evento) {
    this.contadorh = 0;
    //this.cambioContador.emit(this.contadorh);
  }

}
