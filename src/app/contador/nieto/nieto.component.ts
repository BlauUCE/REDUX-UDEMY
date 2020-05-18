//import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/app.reducers';
import { Store } from '@ngrx/store';
import { ResetAction } from '../contador.actions';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styles: []
})
export class NietoComponent implements OnInit {

  //@Input() contadorn:number;
  //@Output() cambio =  new EventEmitter<number>();

  public contadorn: number;

  constructor( private store:Store<AppState> ) { }

  ngOnInit() {
    this.store.select('contador').subscribe(cont => {
      this.contadorn = cont;
    });
  }

  reset() {
    const accion = new ResetAction();
    this.store.dispatch(accion);
    //this.contadorn = 0;
    //this.cambio.emit(this.contadorn);
  }

}
