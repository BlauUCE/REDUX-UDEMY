import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styles: []
})
export class NietoComponent implements OnInit {

  @Input() contadorn:number;
  @Output() cambio = new EventEmitter<number>();


  constructor() { }

  ngOnInit() {
  }

  reset() {
    this.contadorn = 0;
    this.cambio.emit(this.contadorn);
  }

}
