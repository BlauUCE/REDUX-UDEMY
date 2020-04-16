import { Component } from '@angular/core';
import { Store, Action } from '@ngrx/store';
import { IncrementarAction, DecrementarAction } from './contador/contador.actions';
import { AppState } from './app.reducers';


/* interface AppState {
  contador: number;
} */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'PruebaR';
  
  contadorp: number;

  constructor(private store: Store<AppState>) {
    //this.contadorp = 10;

    /* this.store.subscribe( state => {
      //console.log(state);
      this.contadorp = state.contador;
      console.log(state);
    }); */

    /* this.store.select('contador').subscribe( state => {
      //console.log(state);
      //this.contadorp = state.contador;
      console.log(state);
    }); */

    this.store.select('contador').subscribe( cont => {
      //console.log(state);
      this.contadorp = cont;
    });
  }

  incrementar() {
    //this.contadorp++;

    /* const accion: Action = {
      type: 'INCREMENTAR'
    }; */

    const accion = new IncrementarAction();
    this.store.dispatch(accion);
  }

  decrementar() {
    //this.contadorp--;

    /* const accion: Action = {
      type: 'DECREMENTAR'
    }; */

    const accion = new DecrementarAction();
    this.store.dispatch(accion);
  }

}
