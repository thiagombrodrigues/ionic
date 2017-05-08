import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { Registro } from './registro';

@Component({
  selector: 'page-novo-registro',
  templateUrl: 'novo-registro.html',
  providers: []
})
export class NovoRegistroPage {

    private registro: Registro = new Registro(null, 0, null);
    private next: number = 0;

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public alertCtrl: AlertController,
        public storage: Storage
    ) {
        storage.ready().then(() => {
            storage.length().then((val) => {
                this.next = val;
            });
        });
    }

    public salvarRegistro():void {
        this.storage.set(`registro-${ this.next }`, this.registro).then(
          () => {
                let alert = this.alertCtrl.create({
                    title: 'Novo registro',
                    subTitle: 'Registro salvo com sucesso!',
                    buttons: [{
                        text: 'Voltar',
                        handler: data => {
                            this.navParams.get('parentPage').pesquisar(null);
                            this.navCtrl.pop();
                        }
                    }]
                });
                alert.present();
            },
            (error: any) => alert('Erro ao salvar registro: ' + error)
        );
    }
}
