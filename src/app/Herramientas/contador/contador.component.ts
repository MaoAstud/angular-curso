import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `
  <h1>{{title}}</h1>
  <h1>La base es: <strong>{{base}}</strong></h1>
  
  
  <button (click)="Acumular(base)" >+{{base}}</button>
  <span> {{contador}} </span>
  <button (click)="Acumular(-base)" >-{{base}}</button>
  `
})

export class ContadorComponent {
  title :string = 'Contador App';
  contador :number = 0;
  base : number = 5;
  
  public Acumular ( numero : number){
    this.contador += numero;
  }
}