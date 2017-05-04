import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public alunos: Array<{nome: string, sobrenome: string}>;

  constructor(public navCtrl: NavController) {

    this.alunos = [
      {
        nome: 'Bruno',
        sobrenome: 'Savyo de Freitas'
      },
      {
        nome: 'Julianne',
        sobrenome: 'Pereira Lima Licon'
      },
      {
        nome: 'Thiago',
        sobrenome: 'Magalhães de Brito Rodrigues'
      }
    ];

  }

}
