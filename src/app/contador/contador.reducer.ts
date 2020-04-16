//import { Action } from '@ngrx/store';
//import { INCREMENTAR, DECREMENTAR, MULTIPLICAR, actions, DIVIDIR, RESET } from './contador.actions';

//optimizacion
import * as fromContador from './contador.actions';

export function contadorReducer(state:number = 10, action:fromContador.actions ) {

    switch(action.type) {

        case fromContador.INCREMENTAR:
            return state + 1;
            break;
        
        case fromContador.DECREMENTAR:
            return state - 1;
            break;

        case fromContador.MULTIPLICAR:
            return state * action.payload;
            break;
        
        case fromContador.DIVIDIR:
            return state / action.payload;
            break;

        case fromContador.RESET:
            return state = 0;
            //tambien funciona asi return 0;
            break;

        default: return state;
    }
}