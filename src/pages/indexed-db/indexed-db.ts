import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { NovoRegistroPage } from './novo-registro';
import { EditarRegistroPage } from './editar-registro';
import { Registro } from './registro';

@Component({
  selector: 'page-indexed-db',
  templateUrl: 'indexed-db.html',
  providers: []
})
export class IndexedDBPage {

  private registros: Array<Registro> = [];

  constructor(
    public navCtrl: NavController,
    public storage: Storage,
    public alertCtrl: AlertController
  ) {
    storage.ready().then(() => {
      this.pesquisar();
    });
  }

  public excluirRegistro(event: any, chave:string): void {
    event.stopPropagation();
    let confirmacao = this.alertCtrl.create({
      title: 'Confirmar exclusão',
      message: 'Deseja excluir o registro?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancelar',
          handler: () => {
            console.log('Exclusão cancelada');
          }
        },
        {
          text: 'Excluir',
          handler: () => {
            this.storage.remove(chave);
            this.pesquisar();
          }
        }
      ]
    });
    confirmacao.present();
  }

  public pesquisar(conteudo?: string): void {
    this.registros = [];
    this.storage.forEach((value, key, index) => {
      let registro:Registro = new Registro(value.nome, value.idade, value.sexo);
      registro.chave = key;
      if(conteudo)
      {
        if(registro.nome.toUpperCase().indexOf(conteudo.toUpperCase()) >= 0)
        {
          this.registros.push(registro);
        }
      }
      else this.registros.push(registro);
    });
  }

  public novoRegistro(): void {
    this.navCtrl.push(NovoRegistroPage, { parentPage: this });
  }

  public editarRegistro(registro: Registro):void {
    this.navCtrl.push(EditarRegistroPage, {
      parentPage: this,
      registro: registro
    });
  }
}
