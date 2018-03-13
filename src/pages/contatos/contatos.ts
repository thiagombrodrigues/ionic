import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { Contacts } from '@ionic-native/contacts';

import { NovoContatoPage } from './novo-contato';

@Component({
  selector: 'page-contatos',
  templateUrl: 'contatos.html',
  providers: [Contacts]
})
export class ContatosPage {

    private contatos = [];

    constructor(
        public navCtrl: NavController,
        public loadingCtrl: LoadingController,
        public contacts: Contacts
    ) { }

    ionViewDidLoad() {
        // this.buscarContato(null, true);
    }

    novoContato() {
        this.navCtrl.push(NovoContatoPage, { parentPage: this });
    }

    buscarContato(filtro: string, carregando: boolean) {
        let loading = this.loadingCtrl.create({
          content: 'Carregando dados...'
        });
        if(carregando) loading.present();
        
        this.contacts.find(
            ['*'],
            {
                filter: filtro ? filtro : '',
                hasPhoneNumber: true,
                multiple: true
            }
        ).then((contacts) => {
            this.contatos = contacts;
            if(this.contatos.length == 0) this.contatos.push({
                displayName: 'Nenhum contato encontrado',
                phoneNumbers: [{value: ''}]
            });
            if(carregando) loading.dismiss();
        });
    }
}
