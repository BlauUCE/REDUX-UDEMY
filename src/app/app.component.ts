import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PruebaR';
  
  contadorp: number;

  constructor() {
    this.contadorp = 10;
  }

  incrementar() {
    this.contadorp++;
  }

  decrementar() {
    this.contadorp--;
  }

}
