import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes :string[]=['Ironman', 'Spiderman', 'Hulk'];
  heroesBorrados : string[] = [];
  public borrarHeroe():void {
    console.log('borrando');
    if(this.heroes.length != 0)
    this.heroesBorrados.push( this.heroes.pop() || '');
  }
}
