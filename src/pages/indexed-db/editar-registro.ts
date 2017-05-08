import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { Registro } from './registro';

@Component({
  selector: 'page-editar-registro',
  templateUrl: 'editar-registro.html',
  providers: []
})
export class EditarRegistroPage {

    private registro: Registro;

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public alertCtrl: AlertController,
        public storage: Storage
    ) {
        this.registro = this.navParams.get('registro');
    }

    public salvarRegistro():void {        
        this.storage.set(this.registro.chave, this.registro).then(
          () => {
                let alert = this.alertCtrl.create({
                    title: 'Editar registro',
                    subTitle: 'Registro alterado com sucesso!',
                    buttons: [{
                        text: 'Voltar',
                        handler: data => {
                            this.navParams.get('parentPage').pesquisar();
                            this.navCtrl.pop();
                        }
                    }]
                });
                alert.present();
            },
            (error: any) => alert('Erro ao editar registro: ' + error)
        );
    }
}
